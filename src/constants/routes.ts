export const routes = {
    home: '/home',
    lobby: '/lobby/:id',
    goToLobby(id: number | string) {
        return `/lobby/${id}`
    }
}
