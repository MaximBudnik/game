import {gql} from "@apollo/client";
import {moveDirectionType} from "../../../types";

export const MOVE_PLAYER_MUTATION = gql`
    mutation($direction:MoveDirectionInput,$playerId:Int!,$roomId:Int!) {
        movePlayer(direction:$direction, roomId:$roomId, playerId:$playerId){
            playerEntities{
                id
                position{
                    x
                    y
                }
            }
        }
    }
`

export type MOVE_PLAYER_MUTATION = {
    movePlayer: null
}

export type MOVE_PLAYER_MUTATION_VARS = {
    direction: moveDirectionType
    roomId: number
    playerId: number
}
