import {gql} from "@apollo/client";
import { RoomType, updateGameStatusVars } from "../../types";

export const UPDATE_GAME_STATUS = gql`
    mutation ($gameStatus: gameStatusEnum!, $roomId: Int!) {
        updateGameStatus(gameStatus: $gameStatus, roomId: $roomId) {
            id
            name
            gameStatus
            players {
                id
                name
                character
            }
        }
    }
`

export type UPDATE_GAME_STATUS = {
    updateGameStatus:RoomType
}

export type UPDATE_GAME_STATUS_VARS = updateGameStatusVars
