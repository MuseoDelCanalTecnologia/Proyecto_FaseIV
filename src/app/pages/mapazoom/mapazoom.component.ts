import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mapazoom',
  templateUrl: './mapazoom.component.html',
  styleUrls: ['./mapazoom.component.css']
})
export class MapazoomComponent implements OnInit {
  video="1";
  constructor(public wsSocket: SocketService, private route:Router) { }

  ngOnInit() {

    this.enviarVideo();
  }

  
  enviarVideo(){


    this.wsSocket.enviarVideo(this.video);
     
   }
 
 
   enviarHome(){
     this.wsSocket.homeRoute('proyeccion');
   }

}
