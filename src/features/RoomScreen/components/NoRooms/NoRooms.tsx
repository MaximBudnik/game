import React from "react";
import styles from "./NoRooms.module.scss";


const NoRooms: React.FC = () => {
    return (
        <div className={styles.noRooms}>
            <div>
                It seems there are no rooms available. You can create your own room.
            </div>
        </div>
    )
}

export default NoRooms;
