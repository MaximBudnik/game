import React from "react";
import styles from "./LobbySettings.module.scss";

type propsType = {};

const LobbySettingsItem: React.FC<propsType> = (props) => {
    return (
        <div className={styles.item}>
            Settings item
        </div>
    )
}

export default LobbySettingsItem;
