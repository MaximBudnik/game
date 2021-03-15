import React from "react";
import BaseModal from "../../../base/components/BaseModal/BaseModal";
import styles from './CreateRoomModal.module.scss'
import {useForm} from "react-hook-form";
import {RoomFormType} from "../../../../../../game-server/types/src/RoomTypes";


type propsType = {
    isModalOpen: boolean
    closeModal: () => void
}

type inputs = RoomFormType

const CreateRoomModal: React.FC<propsType> = (props) => {
    const {register, handleSubmit, watch, errors} = useForm<inputs>();
    const onSubmit = (data: inputs) => console.log(data);
    console.log(errors)
    return (
        <BaseModal
            isModalOpen={props.isModalOpen}
            closeModal={props.closeModal}
            title={'Create room'}
            width={'30%'}
            height={'auto'}
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
