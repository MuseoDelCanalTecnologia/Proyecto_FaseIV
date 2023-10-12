import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';


@Component({
  selector: 'app-cocosolo-eng',
  templateUrl: './cocosolo-eng.component.html',
  styleUrls: ['./cocosolo-eng.component.css']
})
export class CocosoloEngComponent implements OnInit {

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
  
      }else{
        this.valor="glass-plus"
        this.wsSocket.envioPortal('coco');
        this.idioma();
      }
  
  
  
    }

    idioma(){
      this.wsSocket.idiomaPost('en');
    }


}
