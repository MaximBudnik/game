import React from "react";
import styles from "../LobbyChat.module.scss";
import {IoSend} from "react-icons/io5";
import {useForm} from "react-hook-form";
import {ChatInput} from "../../../../types";
import {useMutation} from "@apollo/client";
import {SEND_LOBBY_CHAT_MESSAGE, SEND_LOBBY_CHAT_MESSAGE_VARS} from "../../gql";
import {observer} from "mobx-react-lite";
import UserIdentityStore from "../../../base/UserIdentity/UserIdentityStore";
import RoomStore from "../../../LobbyAndGameScreen/RoomStore";

type propsType = {};
type inputs = ChatInput

const LobbyChatInput: React.FC<propsType> = observer((props) => {
    const {register, handleSubmit, reset} = useForm<inputs>();
    const [sendLobbyChatMessage] = useMutation<SEND_LOBBY_CHAT_MESSAGE, SEND_LOBBY_CHAT_MESSAGE_VARS>(SEND_LOBBY_CHAT_MESSAGE)
    const onSubmit = async (data: inputs) => {
        sendLobbyChatMessage({
            variables: {
                chatMessage: {
                    text: data.text,
                    senderName: UserIdentityStore.name,
                    type: "default"
                },
                roomId: RoomStore.roomId
            }
        })
        reset()
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
                <input name="text" ref={register({required: true})} className={styles.input} type="text"/>
                <button type={'submit'} className={styles.sendButton}>
                    <IoSend/>
                    <div className={styles.text}>
                        send
                    </div>
                </button>
            </div>
        </form>
    )
})

export default LobbyChatInput;
