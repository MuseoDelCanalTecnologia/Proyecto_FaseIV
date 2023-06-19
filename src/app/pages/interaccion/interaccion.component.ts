import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-interaccion',
  templateUrl: './interaccion.component.html',
  styleUrls: ['./interaccion.component.css']
})
export class InteraccionComponent implements OnInit {

  constructor(public wsSocket: SocketService) { }
   video="2";
  ngOnInit() {

    this.enviarVideo();

  }

  
  enviarVideo(){
    this.wsSocket.enviarVideo(this.video);
  }


  enviarHome(){
    this.wsSocket.homeRoute('proyeccion');
  }



}
