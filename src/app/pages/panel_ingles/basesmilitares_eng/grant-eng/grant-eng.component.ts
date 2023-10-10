import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-grant-eng',
  templateUrl: './grant-eng.component.html',
  styleUrls: ['./grant-eng.component.css']
})
export class GrantEngComponent implements OnInit {


  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-grant');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
