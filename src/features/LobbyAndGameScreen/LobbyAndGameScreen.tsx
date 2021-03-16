import React from "react";
import styles from "./LobbyScreen.module.scss";
import {observer} from "mobx-react-lite";
import RoomStore from "./RoomStore";
import SubscribeAndAddPlayer from "./components/SubscribeAndAddPlayer/SubscribeAndAddPlayer";

const LobbyAndGameScreen: React.FC = observer((props) => {

    return (
        <>
            <SubscribeAndAddPlayer/>
            <div className={styles.wrap}>
                {JSON.stringify(RoomStore.room)}
            </div>
        </>

    )
})

export default LobbyAndGameScreen;
