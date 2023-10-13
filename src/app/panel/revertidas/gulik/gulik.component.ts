import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-gulik',
  templateUrl: './gulik.component.html',
  styleUrls: ['./gulik.component.css']
})
export class GulikComponent implements OnInit {

  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
    this.idioma();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-gulick');
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
        this.wsSocket.envioPortal('gulick-visor');
        this.carusel();
      }else{
        this.valor="glass-plus"
        this.wsSocket.envioPortal('ft-gulick');
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
