import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-rodman',
  templateUrl: './rodman.component.html',
  styleUrls: ['./rodman.component.css']
})
export class RodmanComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('naval');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

  nextImg(){
    this.wsSocket.imgIn('next');
  }
  
  prevImg(){
    this.wsSocket.imgIn('prev');
  }

  idioma(){
    this.wsSocket.idiomaPost('es');
  }


}
