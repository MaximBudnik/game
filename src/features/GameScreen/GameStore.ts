import {makeAutoObservable} from "mobx";
import {GameType} from "../../types";


class GameStore {
    game: GameType | null = null

    updateGame = (game: GameType) => {
        this.game = game
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new GameStore()
