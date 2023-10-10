import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-plagatun',
  templateUrl: './plagatun.component.html',
  styleUrls: ['./plagatun.component.css'],
})
export class PlagatunComponent implements OnInit {
  constructor(private wsSocket: SocketService) {}

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('rio-trinidad');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  cuenca() {
    this.wsSocket.envioPortal('rio-chagres');
  }

  idioma(){
    this.wsSocket.idiomaPost('es');
  }

}
