import {moveDirectionType} from "../../../types";
import {client} from "../graphql/apollo";
import {MOVE_PLAYER_MUTATION, MOVE_PLAYER_MUTATION_VARS} from "./gql";
import {throttle} from "throttle-debounce";
import {appConfig} from "../../../config/appConfig";

export const movePlayer =  throttle(appConfig.game.playerApiThrottle,(roomId: number, playerId: number, direction: moveDirectionType): void => {
    client.mutate<MOVE_PLAYER_MUTATION, MOVE_PLAYER_MUTATION_VARS>({
        mutation: MOVE_PLAYER_MUTATION, variables: {
            playerId, roomId, direction
        }
    })
})

