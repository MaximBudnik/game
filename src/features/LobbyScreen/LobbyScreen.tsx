import React from "react";
import styles from "./LobbyScreen.module.scss";
import {observer} from "mobx-react-lite";
import LobbyChat from "./components/LobbyChat/LobbyChat";
import LobbySettings from "./components/LobbySettings/LobbySettings";
import LobbyPlayers from "./components/LobbyPlayers/LobbyPlayers";
import LobbyTitleWrap from "./components/LobbyTitle/LobbyTitleWrap";
import LobbyStart from "./components/LobbyStart/LobbyStart";
import LobbyCharacter from "./components/LobbyCharacter/LobbyCharacter";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

const LobbyScreen: React.FC<propsType> = observer((props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.players}>
                <LobbyTitleWrap title={'Players'} component={<LobbyPlayers/>}/>
            </div>
            <div className={styles.settings}>
                {/*<LobbyTitle title={'Settings'}/>*/}
                <LobbyTitleWrap title={'Game Settings'} component={<LobbySettings/>}/>

            </div>
            <div className={styles.chat}>
                <LobbyTitleWrap title={'Lobby chat'} component={<LobbyChat/>}/>
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
