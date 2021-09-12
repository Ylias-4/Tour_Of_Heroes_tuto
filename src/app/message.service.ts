import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:String[] = [];

  addMessage(message:string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
  constructor() { }
}
 