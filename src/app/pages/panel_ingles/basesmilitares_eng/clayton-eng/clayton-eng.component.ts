import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-clayton-eng',
  templateUrl: './clayton-eng.component.html',
  styleUrls: ['./clayton-eng.component.css']
})
export class ClaytonEngComponent implements OnInit {

  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
    this.idioma();
    
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
        this.wsSocket.envioPortal('clayton-visor');
  
      }else{
        this.valor="glass-plus"
        this.wsSocket.envioPortal('ft-clayton');
        this.idioma();
      }
  
  
    }

    idioma(){
      this.wsSocket.idiomaPost('en');
    }

    

}
