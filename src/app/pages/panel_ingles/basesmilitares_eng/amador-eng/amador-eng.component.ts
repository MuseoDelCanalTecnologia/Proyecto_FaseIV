import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-amador-eng',
  templateUrl: './amador-eng.component.html',
  styleUrls: ['./amador-eng.component.css']
})
export class AmadorEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }
  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-amador');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
