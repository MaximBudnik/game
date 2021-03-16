import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import UserIdentityStore from "./UserIdentityStore";


const UserIdentity: React.FC = observer(() => {
    useEffect(() => {
        UserIdentityStore.setId()
    }, [])
    return null
})

export default UserIdentity;
