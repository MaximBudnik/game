import {useEffect} from "react";

export type KeyboardBindingsCallback = (event: KeyboardEvent) => void

export const useRegisterKeydown = (callback: KeyboardBindingsCallback): void => {
    useEffect(() => {
        document.addEventListener('keydown', callback)
    },[callback])
}
