import React from "react";
import styles from "./LobbyTitle.module.scss";
import LobbyTitle from "./LobbyTitle";


type propsType = {
    title: string
    component: React.ReactNode
};
/*  Component passed must be flex   */
const LobbyTitleWrap: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <LobbyTitle title={props.title}/>
                {props.component}
        </div>
    )
}

export default LobbyTitleWrap;
