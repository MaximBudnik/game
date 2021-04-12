import React from "react";
import {useSubscription} from "@apollo/client";
import {GAME_SUBSCRIPTION, GAME_SUBSCRIPTION_VARS} from "../gql";
import GameStore from "../GameStore";
import {observer} from "mobx-react-lite";
import RoomStore from "../../LobbyAndGameScreen/RoomStore";


const SubscribeToGame: React.FC = observer((props) => {
    const {error} = useSubscription<GAME_SUBSCRIPTION, GAME_SUBSCRIPTION_VARS>(GAME_SUBSCRIPTION, {
        variables: {id: RoomStore.roomId},
        onSubscriptionData: (data) => {
            if (data.subscriptionData.data) {
                GameStore.updateGame(data.subscriptionData.data.onGameUpdate)
            }
        }
    })
    console.log(error)
    return null
})

export default SubscribeToGame;
