import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-cocosolo-eng',
  templateUrl: './cocosolo-eng.component.html',
  styleUrls: ['./cocosolo-eng.component.css']
})
export class CocosoloEngComponent implements OnInit {

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
