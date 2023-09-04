import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-poligonostiro',
  templateUrl: './poligonostiro.component.html',
  styleUrls: ['./poligonostiro.component.css']
})
export class PoligonostiroComponent implements OnInit {

  constructor(public wsSocket: SocketService) { }

  ngOnInit(): void {
   
    this.enviarProyeccion();
    

  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('balboa-oeste');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  areaRevertida(){
    this.wsSocket.envioPortal('portal');
  }
  

}
