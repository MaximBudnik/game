import React, {useRef} from "react";
import {PlayerType} from "../../../../types";
import styles from "./LobbyPlayerCard.module.scss";
import PlayerEntity from "../../../GameEntity/PlayerEntity/PlayerEntity";
import {Layer, Stage} from "react-konva";
import {useElementDimensions} from "../../../base/hooks/useElementDimensions";

type propsType = {
    player: PlayerType
};

const LobbyPlayerCard: React.FC<propsType> = ({player}) => {
    const getWidthRef = useRef<HTMLDivElement>(null);
    const {width, height} = useElementDimensions(getWidthRef)

    const scale = Math.min(
        window.innerWidth / 900,
        window.innerHeight / 900
    );

    console.log(width, height)
    return (
        <div className={styles.wrap}>
            <div className={styles.name}>
                {player.name}
            </div>
            <div className={styles.content}>
                <div className={styles.canvasContainer} ref={getWidthRef}>
                    <Stage width={width} height={height} scaleX={scale} scaleY={scale}>
                        <Layer imageSmoothingEnabled={false}>
                            <PlayerEntity y={0} x={40} character={player.character} animation={'idle'}/>
                        </Layer>
                    </Stage>
                </div>
                <div className={styles.effectsColumn}>
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                    <div>
                        4
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LobbyPlayerCard;
