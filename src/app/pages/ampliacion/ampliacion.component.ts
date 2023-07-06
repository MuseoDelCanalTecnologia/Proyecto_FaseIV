import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-ampliacion',
  templateUrl: './ampliacion.component.html',
  styleUrls: ['./ampliacion.component.css']
})
export class AmpliacionComponent  {

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
