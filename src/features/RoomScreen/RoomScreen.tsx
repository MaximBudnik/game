import React, {useEffect, useState} from "react";
import styles from "./RoomScreen.module.scss";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_ROOMS} from "./gql";
import RoomListItem from "./components/RoomListItem/RoomListItem";
import FirstRoomListItem from "./components/RoomListItem/FirstRoomListItem";
import LogoAndTitle from "./components/LogoAndTitle/LogoAndTitle";
import CreateRoomModal from "./components/CreateRoomModal/CreateRoomModal";
import Preloader from "../base/components/Preloader/Preloader";
import NoRooms from "./components/NoRooms/NoRooms";
import RefreshButton from "./components/RefreshButton/RefreshButton";




const RoomScreen: React.FC = () => {
    const [getAllRooms, {data, loading, error}] = useLazyQuery<GET_ALL_ROOMS>(GET_ALL_ROOMS, {fetchPolicy: "no-cache"})
    const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState<boolean>(false)
    useEffect(() => {
        if (!data) getAllRooms()
    }, [data, getAllRooms])
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <LogoAndTitle/>
                    <FirstRoomListItem openCreateRoomModal={() => setIsCreateRoomModalOpen(true)}/>
                    {
                        loading ?
                            <div>
                                <Preloader/>
                            </div> :
                            <div>
                                {
                                    data?.rooms.length === 0 ?
                                        <NoRooms/> :
                                        data?.rooms.map((e, i) =>
                                            <RoomListItem {...e} key={i}/>)
                                }
                                <RefreshButton refetchRooms={() => getAllRooms()}/>
                            </div>
                    }
                </div>
            </div>
            <CreateRoomModal isModalOpen={isCreateRoomModalOpen} closeModal={() => setIsCreateRoomModalOpen(false)}/>
        </>
    )
}

export default RoomScreen;
