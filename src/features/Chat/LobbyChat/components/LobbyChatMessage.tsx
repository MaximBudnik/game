import React from "react";
import {ChatMessage} from "../../../../types";
import styles from '../LobbyChat.module.scss'
import Linkify from 'react-linkify'

type propsType = ChatMessage;

const LobbyChatMessage: React.FC<propsType> = (props) => {

    const getMessageText = () => {
        switch (props.type) {
            case 'info':
                return <span className={styles.info}>{props.text}</span>
            case 'default':
            default:
                return `${props.senderName}: ${props.text}`
        }

    }



    return (
        <div className={styles.message}>
            <Linkify>
                {getMessageText()}
            </Linkify>
        </div>
    )
}


export default LobbyChatMessage;
