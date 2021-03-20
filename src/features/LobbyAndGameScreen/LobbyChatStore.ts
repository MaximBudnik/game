import {makeAutoObservable} from "mobx";
import { ChatMessage } from "../../types";


class LobbyChatStore {
    messages:Array<ChatMessage> = []

   constructor() {
       makeAutoObservable(this)
   }

   setMessages = (messages: Array<ChatMessage>) =>{
        this.messages = messages
   }
}

export default new LobbyChatStore()
