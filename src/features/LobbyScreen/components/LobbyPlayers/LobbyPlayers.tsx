import React from "react";
import styles from "./LobbyPlayers.module.scss";
import LobbyTitle from "../LobbyTitle/LobbyTitle";
import LobbyPlayerCard from "../LobbyPlayerCard/LobbyPlayerCard";
import {observer} from "mobx-react-lite";
import RoomStore from "../../../LobbyAndGameScreen/RoomStore";

type propsType = {};

const LobbyPlayers: React.FC<propsType> = observer((props) => {
    return (
                <div className={styles.players}>
                    {RoomStore.room?.players.map(e=><LobbyPlayerCard player={e} key={e.id}/>)}




                </div>
    )
})

export default LobbyPlayers;
