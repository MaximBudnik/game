export const routes = {
    home: '/home',
    room: '/room/:id',
    lobby: '/room/:id/lobby',
    goToLobby(id: number | string) {
        return `/room/${id}/lobby`
    },
    game: '/room/:id/game',
    goToGame(id: number | string) {
        return `/room/${id}/game`
    },
}
