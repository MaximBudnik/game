import React, {useEffect} from "react";
import styles from "./Notification.module.scss";
import NotificationsStore, {Notification, NotificationType} from "./NotificationsStore";
import {appConfig} from "../../../config/appConfig";

type propsType = Notification;

const getTitleAndStyle = (type: NotificationType): [string, string] => {
    switch (type) {
        case "warning":
            return ['Warning', styles.warning]
        case "info":
            return ['Info', styles.info]
        case 'danger':
            return ['Error', styles.danger]
        case  'default':
        default:
            return ['Notification', styles.default]
    }
}

const NotificationItem: React.FC<propsType> = (props) => {
    const [title, classname] = getTitleAndStyle(props.type)
    useEffect(
        () => {
            let timer1 = setTimeout(() => NotificationsStore.deleteNotification(props.text),
                appConfig.notifications.notificationTimeout);

            return () => {
                clearTimeout(timer1);
            };
        }, [props.text]);
    return (
        <div className={classname}>
            <div className={styles.title}>
                {title}
            </div>
            <div>
                {props.text}
            </div>
        </div>
    )
}



export default NotificationItem;
