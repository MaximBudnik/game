import React from "react";
import SubscribeAndAddPlayer from "./components/SubscribeAndAddPlayer/SubscribeAndAddPlayer";
import LobbyScreen from "../LobbyScreen/LobbyScreen";
import RoomStore from "./RoomStore";
import {useParams} from "react-router-dom";
import SubscribeToLobbyChat from "../Chat/SubscribeToLobbyChat";

const LobbyAndGameScreen: React.FC = (props) => {
    const params = useParams<{ id: string }>()
    RoomStore.updateRoomId(+params.id)
    return (
        <>
            <SubscribeAndAddPlayer/>
            <SubscribeToLobbyChat/>
            <LobbyScreen/>
        </>

    )
}

export default LobbyAndGameScreen;
