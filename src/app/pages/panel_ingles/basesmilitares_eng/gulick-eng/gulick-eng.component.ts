import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-gulick-eng',
  templateUrl: './gulick-eng.component.html',
  styleUrls: ['./gulick-eng.component.css']
})
export class GulickEngComponent implements OnInit {

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
