import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-poligonos-eng',
  templateUrl: './poligonos-eng.component.html',
  styleUrls: ['./poligonos-eng.component.css']
})
export class PoligonosEngComponent implements OnInit {


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



  sherman(){
    this.wsSocket.envioPortal('p-sherman');
  }

  pina(){
    this.wsSocket.envioPortal('pina');
  }

  balboa(){
    this.wsSocket.envioPortal('balboa');
  }

  emperador(){
    this.wsSocket.envioPortal('emperador');
  }

  rioHato(){
    this.wsSocket.envioPortal('rio-hato');
  }
  sanJose(){
    this.wsSocket.envioPortal('san-jose');
  }

  poligono(){
    this.wsSocket.envioPortal('balboa-oeste');
  }

}
