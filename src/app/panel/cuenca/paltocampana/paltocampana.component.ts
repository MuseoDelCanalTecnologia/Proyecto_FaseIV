import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-paltocampana',
  templateUrl: './paltocampana.component.html',
  styleUrls: ['./paltocampana.component.css']
})
export class PaltocampanaComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
    this.idioma();

  }


  
  enviarProyeccion() {
    this.wsSocket.envioPortal('altos-campana');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('rio-chagres');
  }
  
  idioma(){
    this.wsSocket.idiomaPost('es');
  }




}
