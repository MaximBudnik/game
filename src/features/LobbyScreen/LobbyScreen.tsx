import React, {useEffect} from "react";
import styles from "./LobbyScreen.module.scss";
import {observer} from "mobx-react-lite";
import LobbyChat from "../Chat/LobbyChat/LobbyChat";
import LobbySettings from "./components/LobbySettings/LobbySettings";
import LobbyPlayers from "./components/LobbyPlayers/LobbyPlayers";
import LobbyTitleWrap from "./components/LobbyTitle/LobbyTitleWrap";
import LobbyStart from "./components/LobbyStart/LobbyStart";
import LobbyCharacter from "./components/LobbyCharacter/LobbyCharacter";
import {useHistory} from "react-router-dom";
import RoomStore from "../LobbyAndGameScreen/RoomStore";
import {routes} from "../../constants/routes";


const LobbyScreen: React.FC = observer(() => {

    const history = useHistory()

    useEffect(() => {
        if (RoomStore.room?.gameStatus === 'play' || RoomStore.room?.gameStatus === 'pause') {
            history.push(routes.goToGame(RoomStore.roomId))
        }
    }, [history, RoomStore.room?.gameStatus])


    return (
        <div className={styles.wrap}>
            <div className={styles.players}>
                <LobbyTitleWrap title={'Players'} component={<LobbyPlayers/>}/>
            </div>
            <div className={styles.settings}>
                <LobbyTitleWrap title={'Game Settings'} component={<LobbySettings/>}/>
            </div>
            <div className={styles.chat}>
                <LobbyChat/>
            </div>
            <div className={styles.start}>
                <LobbyStart/>
            </div>
            <div className={styles.character}>
                <LobbyTitleWrap title={'Character'} component={<LobbyCharacter/>}/>
            </div>
        </div>
    )
})

export default LobbyScreen;
