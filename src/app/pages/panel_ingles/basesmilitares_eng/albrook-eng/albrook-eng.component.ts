import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-albrook-eng',
  templateUrl: './albrook-eng.component.html',
  styleUrls: ['./albrook-eng.component.css']
})
export class AlbrookEngComponent implements OnInit {


  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
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

}
