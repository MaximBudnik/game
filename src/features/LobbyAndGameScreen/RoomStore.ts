import {makeAutoObservable} from "mobx";
import {RoomType} from "../../types";

class RoomStore {
    roomId: number = -1
    room: RoomType | null = null
    playerWasAdded: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    updateRoom = (room: RoomType) => {
        this.room = room
    }

    updateRoomId = (roomId: number) =>{
        this.roomId = roomId
    }

    setPlayerWasAdded(playerWasAdded: boolean) {
        this.playerWasAdded = playerWasAdded
    }
}

export default new RoomStore()
