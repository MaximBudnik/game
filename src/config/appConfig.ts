export const appConfig = {
    apollo: {
        httpUri: process.env.REACT_APP_APOLLO_HTTP_URI,
        wsUri: process.env.REACT_APP_APOLLO_WS_URI
    },
    notifications: {
        notificationTimeout: 5000
    },
    game:{
        frameDelay: 100
    }
}
