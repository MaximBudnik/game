export const appConfig = {
    apollo: {
        httpUri: process.env.REACT_APP_APOLLO_HTTP_URI,
        wsUri: process.env.REACT_APP_APOLLO_WS_URI
    },
    notifications: {
        notificationTimeout: 5000
    },
    playerName: {
        defaultName: '%DEFAULT%',
        namesArray: ['Desiric', 'Viden', 'Ephrais', 'Spene', 'Firrol', 'Astram'
            , 'Oswyn', 'Sheyric', 'Veric', 'Nyer', 'Namior', 'Xandyr', 'Kondor', 'Romaldo',
            'Valery', 'Alada', 'Kaari', 'Raelle', 'Raia', 'Dray', 'Xara', 'Lyka', 'Erikia',
            'Halline',]
    },
    game: {
        frameDelay: 100,
        playerApiThrottle: 50,
        keyboardCheckIntervalDelay: 10
    }
}
