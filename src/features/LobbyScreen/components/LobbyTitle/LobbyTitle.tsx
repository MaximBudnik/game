import React from "react";
import styles from "./LobbyTitle.module.scss";

type propsType = {
    title: string
};

const LobbyTitle: React.FC<propsType> = (props) => {
    return (
        <div className={styles.title}>
            {props.title}
        </div>
    )
}

export default LobbyTitle;
