import {gql} from "@apollo/client";
import {addMessageVars} from "../../../../game-server/types/src/ChatTypes";
import {ChatMessage} from "../../types";

export const LOBBY_CHAT_SUBSCRIPTION = gql`
    subscription($id: Int!){
        onLobbyChatUpdate(id: $id){
            messages{
                senderName
                text
                type
            }
        }
    }
`

export type LOBBY_CHAT_SUBSCRIPTION = {
    onLobbyChatUpdate: {
        messages: Array<ChatMessage>
    }
}

export const SEND_LOBBY_CHAT_MESSAGE = gql`
    mutation($chatMessage: ChatMessageInput!, $roomId: Int!) {
        sendLobbyChatMessage(chatMessage: $chatMessage, roomId: $roomId) {
            messages {
                senderName
                text
                type
            }
        }
    }
`

export type SEND_LOBBY_CHAT_MESSAGE = {
    sendLobbyChatMessage: Array<ChatMessage>
}

export type SEND_LOBBY_CHAT_MESSAGE_VARS = addMessageVars

