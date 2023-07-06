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
      console.log("Conexion con Establecida");
      
    });

    this.socket.on('disconnect', () =>{
      this.socketStatus=false;
      console.log("Desconectado del Server");
    });
    

  }

 
  escuharVideo(){

   
     return this.socket.fromEvent("video-nuevo");


  }

  enviarVideo(video:string){


    this.socket.emit("video",video);

  }

  homeRoute(home:string){

  this.socket.emit("home",home);

  }

  homeEscuchar(){

  return this.socket.fromEvent("route");
 
  }




  



}
