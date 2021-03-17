import React from "react";
import { PlayerType } from "../../../../types";
import styles from "./LobbyPlayerCard.module.scss";

type propsType = {
    player: PlayerType
};

const LobbyPlayerCard: React.FC<propsType> = ({player}) => {
    return (
        <div className={styles.wrap}>
                <div>
                    {player.name}
                </div>
        </div>
    )
}

export default LobbyPlayerCard;
