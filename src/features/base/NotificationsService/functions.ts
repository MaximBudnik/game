import NotificationsStore from "./NotificationsStore";

export const showErrorNotification = (error: Error) => {
    NotificationsStore.addNotification({text: error.message, type: "danger"})
}
