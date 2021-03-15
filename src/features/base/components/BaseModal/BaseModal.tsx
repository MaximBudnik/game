import React from "react";
import styles from "./BaseModal.module.scss";
import {IoClose} from "react-icons/io5";
import Modal from 'react-modal';

type propsType = {
    isModalOpen: boolean
    closeModal: () => void
    title: string
    width: string
    height: string
}
Modal.setAppElement("#root")

const BaseModal: React.FC<propsType> = (props) => {
    return (
        <Modal
            style={{
                content: {
                    width: props.width,
                    height: props.height
                }
            }}
            isOpen={props.isModalOpen}
            onRequestClose={props.closeModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>
                    {props.title}
                </div>
                <button onClick={props.closeModal} className={styles.modalClose}>
                    <IoClose/>
                </button>
            </div>
            <div className={styles.modalContent}>
                {props.children}
            </div>
        </Modal>
    )
}

export default BaseModal;
