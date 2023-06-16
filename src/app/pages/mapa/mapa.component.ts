import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  video="1";
  constructor(public wsSocket: SocketService, private route:Router) {   
    
  }

  ngOnInit(){

 
    this.enviarVideo();
    
 
  }

  enviarVideo(){


   this.wsSocket.enviarVideo(this.video);
    
  }


  enviarHome(){
    this.wsSocket.homeRoute('proyeccion');
  }

}
