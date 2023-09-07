import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-suministro',
  templateUrl: './suministro.component.html',
  styleUrls: ['./suministro.component.css']
})
export class SuministroComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('pacifico-atlantico');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

}
