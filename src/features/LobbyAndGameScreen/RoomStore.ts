import {makeAutoObservable} from "mobx";
import {RoomType} from "../../types";

class RoomStore {
    room: RoomType | null = null

    playerWasAdded: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    updateRoom = (room: RoomType) => {
        this.room = room
    }

    setPlayerWasAdded(playerWasAdded: boolean) {
        this.playerWasAdded = playerWasAdded
    }
}

export default new RoomStore()
