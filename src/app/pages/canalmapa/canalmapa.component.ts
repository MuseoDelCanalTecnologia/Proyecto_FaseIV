import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-canalmapa',
  templateUrl: './canalmapa.component.html',
  styleUrls: ['./canalmapa.component.css']
})
export class CanalmapaComponent implements OnInit {
  video="2";
  constructor(public wsSocket: SocketService) { }

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
