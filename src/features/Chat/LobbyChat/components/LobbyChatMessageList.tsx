import React, {useEffect, useRef} from "react";
import styles from "../LobbyChat.module.scss";
import {observer} from "mobx-react-lite";
import LobbyChatStore from "../../../LobbyAndGameScreen/LobbyChatStore";
import LobbyChatMessage from "./LobbyChatMessage";

type propsType = {};

const LobbyChatMessageList: React.FC<propsType> = observer((props) => {
    const bottomRef = useRef<HTMLDivElement>();

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    useEffect(() => {
        scrollToBottom()
    }, [LobbyChatStore.messages])

    return (
        <div className={styles.messageList}>
            {LobbyChatStore.messages?.map((e, i) => <LobbyChatMessage {...e} key={i}/>)}
            {/* @ts-ignore */}
            <div ref={bottomRef}/>
        </div>
    )
})

export default LobbyChatMessageList;


