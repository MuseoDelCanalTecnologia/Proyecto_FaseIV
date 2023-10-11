import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-randolph',
  templateUrl: './randolph.component.html',
  styleUrls: ['./randolph.component.css']
})
export class RandolphComponent implements OnInit {

  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
    this.idioma();

  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('quarry-heights');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('cuenca');
  }

  bases(){
    this.wsSocket.envioPortal('mapazoom');
  }


  evento(){

  setInterval(()=>{
    let dato
    this.event=document.getElementById("img-comparacion");
    dato=this.event.value.toString();
    this.wsSocket.slideIn(dato);
   // console.log(dato)  
  },100)

  }


  Mapa(){

   
    if(this.valor=="glass-plus"){
      this.valor="glass-minus"
      this.wsSocket.envioPortal('randolph-visor');

    }else{
      this.valor="glass-plus"
      this.wsSocket.envioPortal('rio-gatun');

    }



  }
  
  idioma(){
    this.wsSocket.idiomaPost('es');
  }





}
