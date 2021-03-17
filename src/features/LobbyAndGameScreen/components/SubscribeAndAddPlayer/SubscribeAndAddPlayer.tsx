import React, {useCallback, useEffect} from "react";
import RoomStore from "../../RoomStore";
import ComponentWillUnmount from "../../../base/components/ComponentWillUnmount/ComponentWillUnmount";
import {useHistory, useParams} from "react-router-dom";
import {useMutation, useSubscription} from "@apollo/client";
import {ADD_PLAYER, ADD_PLAYER_VARS, DELETE_PLAYER, DELETE_PLAYER_VARS, ROOM_SUBSCRIPTION} from "../../gql";
import UserIdentityStore from "../../../base/UserIdentity/UserIdentityStore";
import {observer} from "mobx-react-lite";
import {RoomSubscriptionInput} from "../../../../types";
import {showErrorNotification} from "../../../base/notifications/functions";
import {routes} from "../../../../constants/routes";


const SubscribeAndAddPlayer: React.FC = observer((props) => {
    //FIXME Refactor this hook to store
    const params = useParams<{ id: string }>()
    const history = useHistory()
    const [addPlayer] = useMutation<ADD_PLAYER, ADD_PLAYER_VARS>(ADD_PLAYER)
    const [_deletePlayer] = useMutation<DELETE_PLAYER, DELETE_PLAYER_VARS>(DELETE_PLAYER)

    const onUnload = useCallback(
        () => {
            _deletePlayer({variables: {playerId: UserIdentityStore.id, roomId: +params.id}})
        },
        [_deletePlayer, params.id])

    useSubscription<ROOM_SUBSCRIPTION, RoomSubscriptionInput>(ROOM_SUBSCRIPTION,
        {
            variables: {id: +params.id},
            onSubscriptionData: (data) => {
                if (data.subscriptionData.data) {
                    console.log(data)
                    RoomStore.updateRoom(data.subscriptionData.data.onRoomUpdate)
                }
            }

        })

    useEffect(() => {
        if (!RoomStore.playerWasAdded) {
            RoomStore.setPlayerWasAdded(true)
            addPlayer({
                variables: {
                    player: {id: UserIdentityStore.id, name: UserIdentityStore.name},
                    roomId: +params.id
                }
            }).catch(e => showErrorNotification(e))

        }
    }, [addPlayer, params.id])

    useEffect(() => {
        window.addEventListener("beforeunload", onUnload)
        return () => {
            window.removeEventListener("beforeunload", onUnload)
        }
    }, [onUnload])


    return <ComponentWillUnmount componentWillUnmount={
        () => {
            RoomStore.setPlayerWasAdded(false)
            onUnload()
        }
    }/>
})

export default SubscribeAndAddPlayer;
