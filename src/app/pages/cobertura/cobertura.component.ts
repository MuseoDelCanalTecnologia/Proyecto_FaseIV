import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styleUrls: ['./cobertura.component.css']
})
export class CoberturaComponent implements OnInit {

 event:any
  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();


  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('rio-gatun');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('cuenca');
  }


  evento(){
    
  let dato
  this.event=document.getElementById("img-comparacion");
  dato=this.event.value.toString();
  this.wsSocket.slideIn(dato);
  console.log(dato);
  }



}
