import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-lesseps',
  templateUrl: './lesseps.component.html',
  styleUrls: ['./lesseps.component.css']
})
export class LessepsComponent implements OnInit {

  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
    this.idioma();
    
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('estacion-farfam');
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
      this.wsSocket.envioPortal('lesseps-visor');

    }else{
      this.valor="glass-plus"
      this.wsSocket.envioPortal('estacion-farfam');
      this.idioma();
    }



  }
  
  idioma(){
    this.wsSocket.idiomaPost('es');
  }



}
