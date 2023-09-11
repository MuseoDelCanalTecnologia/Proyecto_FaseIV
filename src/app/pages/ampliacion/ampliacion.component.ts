import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/interface/titulo';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-ampliacion',
  templateUrl: './ampliacion.component.html',
  styleUrls: ['./ampliacion.component.css'],
})
export class AmpliacionComponent {
 

  constructor(private wsSocket: SocketService, private http: HttpClient) {}
  video = '2';

  ngOnInit() {
    this.enviarVideo();

  }

  enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }


  subTema(){
    //ESC28.mp4
    this.wsSocket.envioPortal("sub-intro");
  }

}