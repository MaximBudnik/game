import {gql} from "@apollo/client";
import {ChatMessage, PlayerType, RoomType} from "../../types";

export const ROOM_SUBSCRIPTION = gql`
    subscription($id: Int!){
        onRoomUpdate(id:$id){
            id
            name
            gameStatus
            players{
                id
                name
                character
            }
        }
    }
`
export type ROOM_SUBSCRIPTION = {
    onRoomUpdate: RoomType
}

export const ADD_PLAYER = gql`
    mutation($roomId: Int!, $player: PlayerInput!){
        addPlayer(player:$player, roomId:$roomId){
            id
            name
            gameStatus
            players{
                id
                name
                character
            }
        }
    }
`

export type ADD_PLAYER = {
    addPlayer: RoomType
}

export type ADD_PLAYER_VARS = {
    player: PlayerType
    roomId: number
}

export const DELETE_PLAYER = gql`
    mutation($roomId: Int!, $playerId: Int!){
        deletePlayer(playerId:$playerId, roomId:$roomId){
            id
            name
            gameStatus
            players{
                id
                name
                character
            }
        }
    }
`


export type DELETE_PLAYER = {
    deletePlayer: RoomType
}

export type DELETE_PLAYER_VARS = {
    playerId: number
    roomId: number
}
