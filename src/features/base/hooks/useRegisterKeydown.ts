import {useEffect} from "react";
import {appConfig} from "../../../config/appConfig";

export type KeyboardBindingsCallback = (keySet: Set<string>) => void

const keySet = new Set<string>()

export const useRegisterKeydown = (callback: KeyboardBindingsCallback): void => {
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            keySet.add(e.key)
        })
    }, [])
    useEffect(() => {
            document.addEventListener('keyup', (e) => {
                keySet.delete(e.key)
            })
        }, []
    )
    useEffect(() => {
        setInterval(() => callback(keySet), appConfig.game.keyboardCheckIntervalDelay);
    }, [callback])
}
