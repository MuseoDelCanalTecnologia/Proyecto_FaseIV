import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-profundizacion-eng',
  templateUrl: './profundizacion-eng.component.html',
  styleUrls: ['./profundizacion-eng.component.css']
})
export class ProfundizacionEngComponent implements OnInit {

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
    this.wsSocket.idiomaPost('en');
  }

}
