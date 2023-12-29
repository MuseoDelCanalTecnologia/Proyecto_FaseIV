
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/interface/titulo';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.component.html',
  styleUrls: ['./conexiones.component.css']
})
export class ConexionesComponent {

  constructor(public wsSocket: SocketService, private http: HttpClient) {}
  ngOnInit() :void{
    this.enviarPortal();
    this.idioma();
    }
  
    enviarPortal() {
      this.wsSocket.envioPortal('canal-conexiones');
    }
  
    enviarHome() {
      this.wsSocket.homeRoute('proyeccion');
    }
  
   
    idioma(){
      this.wsSocket.idiomaPost('es');
    }
  
  
    
}
