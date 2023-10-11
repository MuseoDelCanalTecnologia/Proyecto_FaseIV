import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private wsSocket: SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }
  enviarProyeccion() {
    this.wsSocket.envioPortal('operacion-gatun');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  idioma(){
    this.wsSocket.idiomaPost('es');
  }



}
