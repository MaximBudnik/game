import React from "react";
import styles from "./RefreshButton.module.scss";
import {IoReload} from "react-icons/io5";

type propsType = {
    refetchRooms: () => void
}


const RefreshButton: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <button className={styles.refreshButton} onClick={props.refetchRooms}>
                <div>
                    <IoReload/>
                    <div>
                        Refresh rooms
                    </div>
                </div>
            </button>
        </div>
    )
}

export default RefreshButton;
