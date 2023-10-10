import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-navegacion-eng',
  templateUrl: './navegacion-eng.component.html',
  styleUrls: ['./navegacion-eng.component.css']
})
export class NavegacionEngComponent implements OnInit {

  constructor(private wsSocket: SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }
  enviarProyeccion() {
    this.wsSocket.envioPortal('operacion-gatun');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

}
