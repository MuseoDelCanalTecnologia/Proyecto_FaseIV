import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-randolph',
  templateUrl: './randolph.component.html',
  styleUrls: ['./randolph.component.css']
})
export class RandolphComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
    this.idioma();

  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('quarry-heights');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  bases(){
    this.wsSocket.envioPortal('mapazoom');
  }
  
  idioma(){
    this.wsSocket.idiomaPost('es');
  }





}
