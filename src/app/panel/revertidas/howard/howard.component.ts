import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-howard',
  templateUrl: './howard.component.html',
  styleUrls: ['./howard.component.css']
})
export class HowardComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('base-howard');
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
