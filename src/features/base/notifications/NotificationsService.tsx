import React from "react";
import styles from "./Notification.module.scss";
import {observer} from "mobx-react-lite";
import NotificationsStore from "./NotificationsStore";
import NotificationItem from "./NotificationItem";

type propsType = {};

const NotificationsService: React.FC<propsType> = observer((props) => {
    return (
        <div className={styles.wrap}>
                {NotificationsStore.notifications.map(e =>
                        <NotificationItem {...e} key={e.text}/>
                )}
        </div>
    )
})

export default NotificationsService;
