import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-howard-eng',
  templateUrl: './howard-eng.component.html',
  styleUrls: ['./howard-eng.component.css']
})
export class HowardEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('base-howard');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
