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
    this.idioma();

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
    this.idioma();
  }

  pina(){
    this.wsSocket.envioPortal('pina');
    this.idioma();
  }

  balboa(){
    this.wsSocket.envioPortal('balboa');
    this.idioma();
  }

  emperador(){
    this.wsSocket.envioPortal('emperador');
    this.idioma();
  }

  rioHato(){
    this.wsSocket.envioPortal('rio-hato');
    this.idioma();
  }
  sanJose(){
    this.wsSocket.envioPortal('san-jose');
    this.idioma();
  }

  poligono(){
    this.wsSocket.envioPortal('balboa-oeste');
    this.idioma();
  }

  idioma(){
    this.wsSocket.idiomaPost('en');
  }

}
