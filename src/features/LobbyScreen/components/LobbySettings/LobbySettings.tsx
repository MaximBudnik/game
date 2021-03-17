import React from "react";
import styles from "./LobbySettings.module.scss";
import LobbySettingsItem from "./LobbySettingsItem";

type propsType = {};

const LobbySettings: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
            <LobbySettingsItem/>
        </div>
    )
}

export default LobbySettings;
