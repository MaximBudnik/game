import {gql} from "@apollo/client";
import { RoomType } from "../../types";

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
    rooms:Array<RoomType>
}


export const ROOM_SUBSCRIPTION = gql`
    subscription($id: Int!){
        onRoomUpdate(id:$id){
            id
            name
            players{
                id
                name
            }
        }
    }
`

export const ADD_PLAYER = gql`
    mutation{
        addPlayer(player:{id:5,name:"51"}, roomId:1){
            name
            players{
                id
                name
            }
        }
    }
`
