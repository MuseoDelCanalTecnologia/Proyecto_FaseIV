import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/interface/titulo';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-buques',
  templateUrl: './buques.component.html',
  styleUrls: ['./buques.component.css']
})
export class BuquesComponent {
  constructor(public wsSocket: SocketService, private http: HttpClient) {}
  ngOnInit() :void{
    this.enviarPortal();
    this.idioma();
    }
  
    enviarPortal() {
      this.wsSocket.envioPortal('canal-buques');
    }
  
    enviarHome() {
      this.wsSocket.homeRoute('proyeccion');
    }
  
   
    idioma(){
      this.wsSocket.idiomaPost('es');
    }

    

  
  
}
