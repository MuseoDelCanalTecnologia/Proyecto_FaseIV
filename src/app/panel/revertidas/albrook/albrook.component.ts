import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-albrook',
  templateUrl: './albrook.component.html',
  styleUrls: ['./albrook.component.css']
})
export class AlbrookComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
    this.idioma();


  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('base-albrook');
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
