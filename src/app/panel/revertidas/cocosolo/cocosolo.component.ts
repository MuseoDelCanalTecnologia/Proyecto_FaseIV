import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-cocosolo',
  templateUrl: './cocosolo.component.html',
  styleUrls: ['./cocosolo.component.css']
})
export class CocosoloComponent implements OnInit {
 click:any;
  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
    this.idioma();
    
  }



  enviarProyeccion() {
    this.wsSocket.envioPortal('coco');
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
        this.wsSocket.envioPortal('cocosolo-visor');
        this.carusel();
      }else{
        this.valor="glass-plus"
        this.wsSocket.envioPortal('coco');
        this.idioma();
      }
  
  
  
    }

  idioma(){
    this.wsSocket.idiomaPost('es');
  }
  
  

 
   
  carusel(){


    document.getElementById('btnCarusel')?.click();
    
  }



}
