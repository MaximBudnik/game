import React from "react";
import styles from "./LobbyChat.module.scss";

type propsType = {};

const LobbyChat: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            THIS IS CHAT
        </div>
    )
}

export default LobbyChat;
