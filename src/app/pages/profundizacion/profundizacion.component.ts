import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-profundizacion',
  templateUrl: './profundizacion.component.html',
  styleUrls: ['./profundizacion.component.css']
})
export class ProfundizacionComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }



  enviarProyeccion() {
    this.wsSocket.envioPortal('corte-culebra');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }




}
