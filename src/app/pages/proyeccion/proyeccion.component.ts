import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-proyeccion',
  templateUrl: './proyeccion.component.html',
  styleUrls: ['./proyeccion.component.css'],
})
export class ProyeccionComponent implements OnInit {
  //assets/proyeccion/PLASTIC - ES.mp4
  //assets/proyeccion/output.mp4
  constructor(public wsSocket: SocketService, private router: Router) {}

  videoES:boolean=false;
  videoEN:boolean=false;
  
  ngOnInit() {

   this.idioma();
    
    this.wsSocket.escuharVideo().subscribe((data) => {
     
      if (data === '1') {
        this.router.navigateByUrl('pro1');
      } else if (data === '2') {
        this.router.navigateByUrl('pro2');
      } else if (data == 'portal') {
        this.router.navigateByUrl('portal');
      } else if (data == 'cuenca') {
        this.router.navigateByUrl('cuenca');
      }else{
        
      }

    });

  }


   playsound(){
    let audio= new Audio();
    audio.src="assets/audio/audio.mp3";
    audio.load();
    audio.play();
    audio.loop=true;
   }


   idioma(){
    this.wsSocket.idiomaGet().subscribe((data)=>{
     
     if(data==='es'){
      
      this.videoES=true;
      this.videoEN=false;
     }else{
      this.videoEN=true;
      this.videoES=false;
     }

    })
   }



}
