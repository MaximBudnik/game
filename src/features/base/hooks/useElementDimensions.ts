import {RefObject, useEffect, useState} from "react";


export const useElementDimensions = <T extends RefObject<any>>(myRef: T): { width: number, height: number } => {
    const [dimensions, setDimensions] = useState({width: 0, height: 0})

    const getDimensions = () => ({
        width: myRef.current.clientWidth,
        height: myRef.current.clientHeight
    })

    useEffect(() => {
        if (myRef.current) {
            setDimensions(getDimensions())
        }

    }, [myRef])

    return dimensions;
}
