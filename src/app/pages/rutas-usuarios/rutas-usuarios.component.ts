import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/interface/titulo';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-rutas-usuarios',
  templateUrl: './rutas-usuarios.component.html',
  styleUrls: ['./rutas-usuarios.component.css']
})
export class RutasUsuariosComponent {
  constructor(public wsSocket: SocketService, private http: HttpClient) {}
  ngOnInit() :void{
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
      this.wsSocket.idiomaPost('es');
    }
  
}
