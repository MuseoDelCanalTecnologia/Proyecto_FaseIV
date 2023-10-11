import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-suministro-eng',
  templateUrl: './suministro-eng.component.html',
  styleUrls: ['./suministro-eng.component.css']
})
export class SuministroEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('pacifico-atlantico');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }


  idioma(){
    this.wsSocket.idiomaPost('en');
  }

}
