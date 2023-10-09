import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-clayton-eng',
  templateUrl: './clayton-eng.component.html',
  styleUrls: ['./clayton-eng.component.css']
})
export class ClaytonEngComponent implements OnInit {

  constructor(private wsSocket: SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-clayton');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
