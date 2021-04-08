import React from 'react';
import './styles/App.scss';
import {Redirect, Route, Switch} from "react-router-dom";
import RoomScreen from "./features/RoomScreen/RoomScreen";
import {routes} from "./constants/routes";
import LobbyAndGameScreen from "./features/LobbyAndGameScreen/LobbyAndGameScreen";
import UserIdentity from "./features/base/UserIdentity/UserIdentity";
import NotificationsService from "./features/base/NotificationsService/NotificationsService";

const App = () => {
        return (
            <>
                <UserIdentity/>
                <NotificationsService/>
                <div className="App">
                    <Switch>
                        <Route path={routes.home} component={RoomScreen}/>
                        <Route path={routes.room} component={LobbyAndGameScreen}/>
                        <Redirect to={routes.home}/>
                    </Switch>
                </div>
            </>

        );
    }
;

export default App;
