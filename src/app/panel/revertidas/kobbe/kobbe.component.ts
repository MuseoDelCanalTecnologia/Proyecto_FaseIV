import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-kobbe',
  templateUrl: './kobbe.component.html',
  styleUrls: ['./kobbe.component.css']
})
export class KobbeComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
    this.idioma();

  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-kobbe');
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
