import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-amador-eng',
  templateUrl: './amador-eng.component.html',
  styleUrls: ['./amador-eng.component.css']
})
export class AmadorEngComponent implements OnInit {

  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
    this.idioma();
    
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-amador');
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
        this.wsSocket.envioPortal('amador-visor');
  
      }else{
        this.valor="glass-plus"
        this.wsSocket.envioPortal('ft-amador');
        this.idioma();
      }
  
  
  
    }

    idioma(){
      this.wsSocket.idiomaPost('en');
    }


}
