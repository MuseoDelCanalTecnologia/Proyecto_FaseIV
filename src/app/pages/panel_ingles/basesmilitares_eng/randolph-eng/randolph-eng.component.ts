import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-randolph-eng',
  templateUrl: './randolph-eng.component.html',
  styleUrls: ['./randolph-eng.component.css']
})
export class RandolphEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('quarry-heights');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
