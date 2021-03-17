import React from "react";
import BaseModal from "../../../base/components/BaseModal/BaseModal";
import styles from './CreateRoomModal.module.scss'
import {useForm} from "react-hook-form";
import {RoomFormType} from "../../../../../../game-server/types/src/RoomTypes";
import {useMutation} from "@apollo/client";
import {CREATE_ROOM, CREATE_ROOM_VARS} from "../../gql";
import {useHistory} from "react-router-dom";
import {routes} from "../../../../constants/routes";


type propsType = {
    isModalOpen: boolean
    closeModal: () => void
}

type inputs = RoomFormType

const CreateRoomModal: React.FC<propsType> = (props) => {
    const {register, handleSubmit, watch, errors} = useForm<inputs>();
    const [createRoom] = useMutation<CREATE_ROOM, CREATE_ROOM_VARS>(CREATE_ROOM);
    const history = useHistory()
    const onSubmit = async (data: inputs) => {
        const res = await createRoom({variables: data})
        console.log(res)
        if (res.data && res.data.createRoom) {
            history.push(routes.goToLobby(res.data.createRoom.id))
        }
    };
    return (
        <BaseModal
            isModalOpen={props.isModalOpen}
            closeModal={props.closeModal}
            title={'Create room'}
            style={{
                content: {
                    width: '40%',
                    minWidth: '768px'
                }
            }}
        >
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Room name:</label>
                <input className={errors.name && styles.errorBorder} name="name"
                       ref={register({required: true, minLength: 1, maxLength: 30})}/>
                {errors.name &&
                <div className={styles.formError}>{errors.name.type === "required" ? 'Room name is required' :
                    'Room name must be less than 30 characters'}</div>}


                <button type={'submit'} className={styles.createRoomButton}>
                    Create room
                </button>
            </form>
        </BaseModal>
    )
}

export default CreateRoomModal;
