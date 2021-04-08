import {moveDirectionType} from "../../../types";
import {client} from "../graphql/apollo";
import {MOVE_PLAYER_MUTATION, MOVE_PLAYER_MUTATION_VARS} from "./gql";

export const movePlayer = (roomId: number, playerId: number, direction: moveDirectionType):void => {
    client.mutate<MOVE_PLAYER_MUTATION, MOVE_PLAYER_MUTATION_VARS>({
        mutation: MOVE_PLAYER_MUTATION, variables: {
            playerId, roomId, direction
        }
    })
}
