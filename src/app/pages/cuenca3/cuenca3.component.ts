import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-cuenca3',
  templateUrl: './cuenca3.component.html',
  styleUrls: ['./cuenca3.component.css']
})
export class Cuenca3Component implements OnInit {

  constructor(public wsSocket: SocketService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  this.enviarVideo();
  this.idioma();
  }


  enviarVideo() {
    this.wsSocket.enviarVideo('cuenca');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }
 
  idioma(){
    this.wsSocket.idiomaPost('es');
  }


  


}
