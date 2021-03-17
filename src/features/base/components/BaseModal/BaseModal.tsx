import React from "react";
import styles from "./BaseModal.module.scss";
import {IoClose} from "react-icons/io5";
import Modal, {Styles} from 'react-modal';

type propsType = {
    isModalOpen: boolean
    closeModal: () => void
    title: string
    style: Styles
}
Modal.setAppElement("#root")

const BaseModal: React.FC<propsType> = (props) => {
    return (
        <Modal
            style={props.style}
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
