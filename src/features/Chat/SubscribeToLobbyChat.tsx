import React from "react";
import {useSubscription} from "@apollo/client";
import {LobbyChatSubscriptionInput} from "../../types";
import RoomStore from "../LobbyAndGameScreen/RoomStore";
import LobbyChatStore from "../LobbyAndGameScreen/LobbyChatStore";
import {LOBBY_CHAT_SUBSCRIPTION} from "./gql";
import {observer} from "mobx-react-lite";

type propsType = {};

const SubscribeToLobbyChat: React.FC<propsType> = observer((props) => {
    useSubscription<LOBBY_CHAT_SUBSCRIPTION, LobbyChatSubscriptionInput>(LOBBY_CHAT_SUBSCRIPTION,
        {
            variables: {id: RoomStore.roomId},
            onSubscriptionData: (data) => {
                if (data.subscriptionData.data) {
                    LobbyChatStore.setMessages(data.subscriptionData.data.onLobbyChatUpdate.messages)
                }
            }

        })
    return null
})

export default SubscribeToLobbyChat;
