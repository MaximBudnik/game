import React from "react";
import {RoomType} from "../../../../types";
import styles from "./RoomListItem.module.scss";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = RoomType;

const RoomListItem: React.FC<propsType> = (props) => {
    return (
        <div className={styles.item}>
            <div>
                #{props.id}
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.players.length}
            </div>
            <button className={styles.join}>
                Join
            </button>
        </div>
    )
}

export default RoomListItem;
