import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-cocosolo',
  templateUrl: './cocosolo.component.html',
  styleUrls: ['./cocosolo.component.css']
})
export class CocosoloComponent implements OnInit {

  constructor(private wsSocket :SocketService) { }

  ngOnInit(): void {
 
    this.enviarProyeccion();

  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('coco');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 bases(){
    this.wsSocket.envioPortal('mapazoom');
  }
  

}
