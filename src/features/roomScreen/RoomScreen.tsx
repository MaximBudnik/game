import React, {useState} from "react";
// @ts-ignore
import styles from "./RoomScreen.module.scss";
import {useQuery} from "@apollo/client";
import {GET_ALL_ROOMS} from "./gql";
import RoomListItem from "./components/RoomListItem/RoomListItem";
import FirstRoomListItem from "./components/RoomListItem/FirstRoomListItem";
import LogoAndTitle from "./components/LogoAndTitle/LogoAndTitle";
import CreateRoomModal from "./components/CreateRoomModal/CreateRoomModal";
import Preloader from "../base/components/Preloader/Preloader";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

const RoomScreen: React.FC<propsType> = (props) => {
    const {data, loading, error} = useQuery<GET_ALL_ROOMS>(GET_ALL_ROOMS)
    const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState<boolean>(false)
    console.log(data, loading, error)
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <LogoAndTitle/>
                    <FirstRoomListItem openCreateRoomModal={()=>setIsCreateRoomModalOpen(true)}/>
                    {
                        loading ?
                            <div>
                                <Preloader/>
                            </div> :
                            <div>
                                {
                                    data?.rooms.length === 0 ?
                                        <div className={styles.noRooms}>
                                            It seems there are no rooms available. You can create your own room.
                                        </div> :
                                        data?.rooms.map((e, i) => <RoomListItem {...e} key={i}/>)
                                }
                            </div>
                    }
                </div>
            </div>
            <CreateRoomModal isModalOpen={isCreateRoomModalOpen} closeModal={() => setIsCreateRoomModalOpen(false)}/>
        </>
    )
}

export default RoomScreen;
