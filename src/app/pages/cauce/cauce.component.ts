import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-cauce',
  templateUrl: './cauce.component.html',
  styleUrls: ['./cauce.component.css'],
})
export class CauceComponent implements OnInit {
  constructor(private wsSocket: SocketService) {}

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }

  enviarProyeccion() {
   
   console.log(this.wsSocket.envioPortal('acceso-pacifico'));
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
   
  }

  idioma(){
    this.wsSocket.idiomaPost('es');
  }

}
