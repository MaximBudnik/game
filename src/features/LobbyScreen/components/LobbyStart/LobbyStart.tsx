import React from "react";
import styles from "./LobbyStart.module.scss";
import {useMutation} from "@apollo/client";
import {UPDATE_GAME_STATUS, UPDATE_GAME_STATUS_VARS} from "../../gql";
import RoomStore from "../../../LobbyAndGameScreen/RoomStore";
import {observer} from "mobx-react-lite";

type propsType = {};

const LobbyStart: React.FC<propsType> = observer((props) => {
    const [_startGame] = useMutation<UPDATE_GAME_STATUS,UPDATE_GAME_STATUS_VARS>(UPDATE_GAME_STATUS)

    const startGame = () => _startGame({variables:{roomId: RoomStore.roomId, gameStatus: 'play'}})

    return (
        <button onClick={startGame} className={styles.wrap}>
            <div>
                Start
            </div>
        </button>
    )
})

export default LobbyStart;
