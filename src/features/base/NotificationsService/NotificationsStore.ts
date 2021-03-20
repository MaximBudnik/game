import {makeAutoObservable} from "mobx";

export type NotificationType = 'default' | 'danger' | 'warning' | 'info'

export type Notification = {
    type: NotificationType
    text: string
}

class NotificationsStore {
    notifications: Array<Notification> = []

    constructor() {
        makeAutoObservable(this)
    }

    addNotification = (notification: Notification) => {
        this.notifications.push(notification)
    }

    deleteNotification = (text: string) => {
        this.notifications = this.notifications.filter(e => e.text !== text)
    }
}

export default new NotificationsStore()
