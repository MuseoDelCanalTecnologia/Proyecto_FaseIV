import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-construccion-eng',
  templateUrl: './construccion-eng.component.html',
  styleUrls: ['./construccion-eng.component.css']
})
export class ConstruccionEngComponent implements OnInit {

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
    this.wsSocket.idiomaPost('en');
  }
}
