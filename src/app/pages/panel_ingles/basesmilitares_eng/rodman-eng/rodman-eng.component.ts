import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-rodman-eng',
  templateUrl: './rodman-eng.component.html',
  styleUrls: ['./rodman-eng.component.css']
})
export class RodmanEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('naval');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
