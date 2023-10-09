import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-davis-eng',
  templateUrl: './davis-eng.component.html',
  styleUrls: ['./davis-eng.component.css']
})
export class DavisEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-davis');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

   bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
