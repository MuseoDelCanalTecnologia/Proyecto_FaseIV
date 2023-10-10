import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-construccion-eng',
  templateUrl: './construccion-eng.component.html',
  styleUrls: ['./construccion-eng.component.css']
})
export class ConstruccionEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('nuevas-esclusas');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
    console.log("CLIK ENTRO")
  }

}
