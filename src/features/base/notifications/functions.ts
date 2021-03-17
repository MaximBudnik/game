import NotificationsStore from "./NotificationsStore";

export const showErrorNotification = (error: Error) => {
    console.error('catch', error)
    NotificationsStore.addNotification({text: error.message, type: "danger"})
}
