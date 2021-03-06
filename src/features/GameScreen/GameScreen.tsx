import React, {useRef} from "react";
import styles from "./GameScreen.module.scss";
import {observer} from "mobx-react-lite";
import {useElementDimensions} from "../base/hooks/useElementDimensions";
import {Stage} from "react-konva";
import SubscribeToGame from "./components/SubscribeToGame";
import PlayersLayer from "./components/Layers/PlayersLayer";
import {useRegisterKeydown} from "../base/hooks/useRegisterKeydown";
import {getGameBindings} from "../base/keyboard/gameBindings";
import RoomStore from "../LobbyAndGameScreen/RoomStore";
import UserIdentityStore from "../base/UserIdentity/UserIdentityStore";
import {canvasConfig} from "../../config/canvasConfig";

type propsType = {};

const GameScreen: React.FC<propsType> = observer((props) => {
    const elementDimensionsRef = useRef<HTMLDivElement>()
    const {width, height} = useElementDimensions(elementDimensionsRef)

    useRegisterKeydown(getGameBindings(RoomStore.roomId, UserIdentityStore.id))
    const scale = Math.min(
        window.innerWidth / canvasConfig.virtualWidth,
        window.innerHeight / canvasConfig.virtualHeight
    );
    return (
        <>
            <SubscribeToGame/>
            {/* @ts-ignore  */}
            <div ref={elementDimensionsRef} className={styles.wrap}>
                <Stage scaleX={scale} scaleY={scale} width={width} height={height}>
                    <PlayersLayer/>
                </Stage>
            </div>
        </>
    )
})

export default GameScreen;
