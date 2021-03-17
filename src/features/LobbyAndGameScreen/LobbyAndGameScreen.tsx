import React from "react";
import SubscribeAndAddPlayer from "./components/SubscribeAndAddPlayer/SubscribeAndAddPlayer";
import LobbyScreen from "../LobbyScreen/LobbyScreen";

const LobbyAndGameScreen: React.FC = (props) => {

    return (
        <>
            <SubscribeAndAddPlayer/>
            <LobbyScreen/>
        </>

    )
}

export default LobbyAndGameScreen;
