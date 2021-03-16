import {gql} from "@apollo/client";
import {RoomInput, RoomType} from "../../types";

export const GET_ALL_ROOMS = gql`
    query{
        rooms{
            id
            name
            players{
                id
                name
            }
        }
    }
`

export type GET_ALL_ROOMS = {
    rooms: Array<RoomType>
}

export const CREATE_ROOM = gql`
    mutation($name: String!){
        createRoom(room:{name:$name}){
            id
            name
            players{
                id
                name
            }
        }
    }
`

export type CREATE_ROOM = {
    createRoom: RoomType
}

export type CREATE_ROOM_VARS = RoomInput





