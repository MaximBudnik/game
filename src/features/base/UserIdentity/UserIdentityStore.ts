import {makeAutoObservable} from "mobx";

class UserIdentityStore {
    id: number = 999999;
    name: string = 'Default name';

    constructor() {
        makeAutoObservable(this);
    }

    setId = () => {
        const USER_ID_SESSION_STORAGE_KEY = 'userId'
        const userId = sessionStorage.getItem(USER_ID_SESSION_STORAGE_KEY)
        if (userId) {
            this.id = +userId
        } else {
            this.id = Math.floor(100000 + Math.random() * 900000)
            sessionStorage.setItem(USER_ID_SESSION_STORAGE_KEY, this.id.toString())
        }
    };

    setName = (name: string) => {
        const USER_NAME_SESSION_STORAGE_KEY = 'userName'
        sessionStorage.setItem(USER_NAME_SESSION_STORAGE_KEY, name)
        this.name = name
    }

}

export default new UserIdentityStore()
