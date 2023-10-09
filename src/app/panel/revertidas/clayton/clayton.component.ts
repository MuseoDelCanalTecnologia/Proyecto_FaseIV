import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-clayton',
  templateUrl: './clayton.component.html',
  styleUrls: ['./clayton.component.css']
})
export class ClaytonComponent implements OnInit {

  constructor(private wsSocket: SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-clayton');
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
