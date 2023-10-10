import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-psoberania',
  templateUrl: './psoberania.component.html',
  styleUrls: ['./psoberania.component.css']
})
export class PsoberaniaComponent implements OnInit {

  constructor(private wsSocket :SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
    this.idioma();
  }



  enviarProyeccion() {
    this.wsSocket.envioPortal('parque-soberania');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('rio-chagres');
  }
  
  idioma(){
    this.wsSocket.idiomaPost('es');
  }


}
