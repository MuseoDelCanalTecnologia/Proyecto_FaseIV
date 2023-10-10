import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-caminocruces-eng',
  templateUrl: './caminocruces-eng.component.html',
  styleUrls: ['./caminocruces-eng.component.css']
})
export class CaminocrucesEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('camino-cruces');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('rio-chagres');
  }

}
