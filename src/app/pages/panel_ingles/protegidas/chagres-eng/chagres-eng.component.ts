import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chagres-eng',
  templateUrl: './chagres-eng.component.html',
  styleUrls: ['./chagres-eng.component.css']
})
export class ChagresEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('parque-chagres');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('rio-chagres');
  }

  idioma(){
    this.wsSocket.idiomaPost('en');
  }

}
