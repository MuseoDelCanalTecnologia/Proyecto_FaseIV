import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-grant',
  templateUrl: './grant.component.html',
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {

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
