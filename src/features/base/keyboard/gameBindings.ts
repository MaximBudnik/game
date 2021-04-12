import {KeyboardBindingsCallback} from "../hooks/useRegisterKeydown";
import {keyboardConfig} from "../../../config/keyboardConfig";
import {movePlayer} from "../playerApi/playerApi";

const {MOVE_RIGHT, MOVE_UP, MOVE_DOWN, MOVE_LEFT} = keyboardConfig

export const getGameBindings = (roomId: number, userId: number): KeyboardBindingsCallback => {
    return (keySet) => {

        let playerMoveDirection = {x: 0, y: 0}

        if (keySet.has(MOVE_UP)) {
            playerMoveDirection.y += -1
        }
        if (keySet.has(MOVE_LEFT)) {
            playerMoveDirection.x += -1
        }
        if (keySet.has(MOVE_RIGHT)) {
            playerMoveDirection.x += 1
        }
        if (keySet.has(MOVE_DOWN)) {
            playerMoveDirection.y += 1
        }
        if (playerMoveDirection.x !== 0 || playerMoveDirection.y !== 0) {
            movePlayer(roomId, userId, playerMoveDirection)
        }
    }
}
