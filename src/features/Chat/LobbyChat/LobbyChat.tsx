import React from "react";
import styles from "./LobbyChat.module.scss";
import LobbyChatMessageList from "./components/LobbyChatMessageList";
import LobbyChatInput from "./components/LobbyChatInput";

type propsType = {};

const LobbyChat: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <LobbyChatMessageList/>
            <LobbyChatInput/>
        </div>
    )
}

export default LobbyChat;
