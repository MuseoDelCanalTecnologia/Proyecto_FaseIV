import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-subcuenca-eng',
  templateUrl: './subcuenca-eng.component.html',
  styleUrls: ['./subcuenca-eng.component.css']
})
export class SubcuencaEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {


    this.enviarProyeccion();
    this.idioma();
  }



  enviarProyeccion() {
    this.wsSocket.envioPortal('rio-pequeni');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('cuenca');
  }

  idioma(){
    this.wsSocket.idiomaPost('en');
  }

}
