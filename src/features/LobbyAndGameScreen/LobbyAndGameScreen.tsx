import React from "react";
import SubscribeToRoomAndAddPlayer from "./components/SubscribeAndAddPlayer/SubscribeToRoomAndAddPlayer";
import LobbyScreen from "../LobbyScreen/LobbyScreen";
import RoomStore from "./RoomStore";
import {Route, Switch, useParams} from "react-router-dom";
import SubscribeToLobbyChat from "../Chat/SubscribeToLobbyChat";
import {routes} from "../../constants/routes";
import GameScreen from "../GameScreen/GameScreen";

const LobbyAndGameScreen: React.FC = () => {
    const params = useParams<{ id: string }>()
    RoomStore.updateRoomId(+params.id)

    return (
        <>
            <SubscribeToRoomAndAddPlayer/>
            <SubscribeToLobbyChat/>
            <Switch>
                <Route path={routes.lobby} component={LobbyScreen}/>
                <Route path={routes.game} component={GameScreen}/>
            </Switch>
        </>

    )
}

export default LobbyAndGameScreen;
