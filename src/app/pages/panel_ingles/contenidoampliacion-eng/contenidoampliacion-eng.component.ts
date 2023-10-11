import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/interface/titulo';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-contenidoampliacion-eng',
  templateUrl: './contenidoampliacion-eng.component.html',
  styleUrls: ['./contenidoampliacion-eng.component.css']
})
export class ContenidoampliacionEngComponent implements OnInit {

  
  constructor(public wsSocket: SocketService, private http: HttpClient) {}
 

  ngOnInit() {
  this.enviarPortal();
  this.idioma();
  }

  enviarPortal() {
    this.wsSocket.envioPortal('sub-intro');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }


  idioma(){
    this.wsSocket.idiomaPost('en');
  }

}
