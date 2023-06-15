import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public socketStatus=false;

  constructor(private socket: Socket) 
  {
    this.checkStatus();
   }


   checkStatus(){

    this.socket.on('connect', () =>{
      this.socketStatus=true;
      console.log("Conexion con Establecida")
    });

    this.socket.on('disconnect', () =>{
      this.socketStatus=false;
      console.log("Desconectado del Server");
    });
    

  }


}
