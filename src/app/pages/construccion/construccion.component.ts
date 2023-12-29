import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html',
  styleUrls: ['./construccion.component.css']
})
export class ConstruccionComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('nuevas-esclusas');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  idioma(){
    this.wsSocket.idiomaPost('es');
  }

  esclusas(){

    this.wsSocket.envioPortal('neo-panamax');
  }
}
