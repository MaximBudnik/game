import React from "react";
import {Link} from "react-router-dom";
import {RoomType} from "../../../../types";
import styles from "./RoomListItem.module.scss";
import {routes} from "../../../../constants/routes";

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
            <Link to={routes.goToLobby(props.id)}>
                <button className={styles.join}>
                    Join
                </button>
            </Link>
        </div>
    )
}

export default RoomListItem;
