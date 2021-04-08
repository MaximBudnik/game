import {gql} from "@apollo/client";
import { GameSubscriptionInput, GameType } from "../../types";


export const GAME_SUBSCRIPTION = gql`
    subscription($id: Int!) {
        onGameUpdate(id: $id) {
            playerEntities {
                id
                position {
                    x
                    y
                }
            }
        }
    }
`

export type GAME_SUBSCRIPTION = {
    onGameUpdate: GameType
}

export type GAME_SUBSCRIPTION_VARS = GameSubscriptionInput
