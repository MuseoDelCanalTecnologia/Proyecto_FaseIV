import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-soberania-eng',
  templateUrl: './soberania-eng.component.html',
  styleUrls: ['./soberania-eng.component.css']
})
export class SoberaniaEngComponent implements OnInit {

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
    this.wsSocket.idiomaPost('en');
  }

}
