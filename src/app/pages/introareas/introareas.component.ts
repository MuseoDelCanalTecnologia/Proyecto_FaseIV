import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-introareas',
  templateUrl: './introareas.component.html',
  styleUrls: ['./introareas.component.css']
})
export class IntroareasComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
    this.idioma();
  }



  enviarProyeccion() {
    this.wsSocket.envioPortal('rio-chagres');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('cuenca');
  }
  

  idioma(){
    this.wsSocket.idiomaPost('es');
  }



}
