import React from "react";
import styles from "./RoomListItem.module.scss";

type propsType = {
    openCreateRoomModal: ()=>void
}

const FirstRoomListItem: React.FC<propsType> = (props) => {
    return (
        <div className={styles.firstItem}>
            <div>
                Id
            </div>
            <div>
                Room name
            </div>
            <div>
                Players
            </div>
            <button className={styles.create} onClick={props.openCreateRoomModal}>
                Create room
            </button>
        </div>
    )
}

export default FirstRoomListItem;
