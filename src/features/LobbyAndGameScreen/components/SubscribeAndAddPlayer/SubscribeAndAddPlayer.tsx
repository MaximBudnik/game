import React, {useCallback, useEffect} from "react";
import RoomStore from "../../RoomStore";
import {useHistory} from "react-router-dom";
import {useMutation, useSubscription} from "@apollo/client";
import {ADD_PLAYER, ADD_PLAYER_VARS, DELETE_PLAYER, DELETE_PLAYER_VARS, ROOM_SUBSCRIPTION} from "../../gql";
import UserIdentityStore from "../../../base/UserIdentity/UserIdentityStore";
import {observer} from "mobx-react-lite";
import {showErrorNotification} from "../../../base/NotificationsService/functions";
import {RoomSubscriptionInput} from "../../../../types";


const SubscribeAndAddPlayer: React.FC = observer((props) => {
    const history = useHistory()
    const [addPlayer] = useMutation<ADD_PLAYER, ADD_PLAYER_VARS>(ADD_PLAYER)
    const [_deletePlayer] = useMutation<DELETE_PLAYER, DELETE_PLAYER_VARS>(DELETE_PLAYER)

    const onUnload = useCallback(
        () => {
            _deletePlayer({variables: {playerId: UserIdentityStore.id, roomId: RoomStore.roomId}})
        },
        [_deletePlayer, RoomStore.roomId])

    useSubscription<ROOM_SUBSCRIPTION, RoomSubscriptionInput>(ROOM_SUBSCRIPTION,
        {
            variables: {id: RoomStore.roomId},
            onSubscriptionData: (data) => {
                if (data.subscriptionData.data) {
                    RoomStore.updateRoom(data.subscriptionData.data.onRoomUpdate)
                }
            }

        })

    useEffect(() => {
        if (!RoomStore.playerWasAdded) {
            RoomStore.setPlayerWasAdded(true)
            addPlayer({
                variables: {
                    player: {
                        id: UserIdentityStore.id,
                        name: UserIdentityStore.name,
                        character: 'redKnight'
                    },
                    roomId: RoomStore.roomId
                }
            }).catch(e => showErrorNotification(e))

        }
        return () => {
            RoomStore.setPlayerWasAdded(false)
            onUnload()
        }
    }, [])

    useEffect(() => {
        window.addEventListener("beforeunload", onUnload)
        return () => {
            window.removeEventListener("beforeunload", onUnload)
        }
    }, [onUnload])


    return null
    // <ComponentWillUnmount componentWillUnmount={
    //     () => {
    //         RoomStore.setPlayerWasAdded(false)
    //         onUnload()
    //     }
    // }/>
})

export default SubscribeAndAddPlayer;
