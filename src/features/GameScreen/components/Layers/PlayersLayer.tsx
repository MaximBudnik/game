import React from "react";
import {Layer} from "react-konva";
import {observer} from "mobx-react-lite";
import RoomStore from "../../../LobbyAndGameScreen/RoomStore";
import PlayerEntity from "../../../GameEntity/PlayerEntity/PlayerEntity";
import GameStore from "../../GameStore";


const PlayersLayer: React.FC = observer(() => {
    return (
        <Layer imageSmoothingEnabled={false}>
            {RoomStore.room?.players.map((player) => {
                if (GameStore.game) {
                    const playerEntity = GameStore.game.playerEntities.find(e => e.id === player.id)
                    if (playerEntity) {
                        return <PlayerEntity animation={playerEntity.animation}
                                             animationDirection={playerEntity.animationDirection}
                                             character={player.character}
                                             x={playerEntity.position.x}
                                             y={playerEntity.position.y}
                                             key={player.id}/>
                    }
                }
            })}
        </Layer>
    )
})

export default PlayersLayer;
