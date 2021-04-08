import {KeyboardBindingsCallback} from "../hooks/useRegisterKeydown";
import {keyboardConfig} from "../../../config/keyboardConfig";
import {throttle} from "throttle-debounce";
import {movePlayer} from "../playerApi/playerApi";

const {MOVE_RIGHT, MOVE_UP, MOVE_DOWN, MOVE_LEFT} = keyboardConfig


const t = <T = () => void>(f: T) => throttle(50, f)

const _movePlayer = t(movePlayer)

export const getGameBindings = (roomId: number, userId: number): KeyboardBindingsCallback => {
    return (event) => {

        console.log(event)

        const key = event.key

        if (key === MOVE_UP) {
            movePlayer(roomId, userId, {x: 0, y: -5})
        }
        if (key === MOVE_LEFT) {
            movePlayer(roomId, userId, {x: -5, y: 0})
        }
        if (key === MOVE_RIGHT) {
            movePlayer(roomId, userId, {x: 5, y: 0})
        }
        if (key === MOVE_DOWN) {
            movePlayer(roomId, userId, {x: 0, y: 5})
        }
    }
}
