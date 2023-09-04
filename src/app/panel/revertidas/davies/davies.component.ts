import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-davies',
  templateUrl: './davies.component.html',
  styleUrls: ['./davies.component.css']
})
export class DaviesComponent implements OnInit {

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
