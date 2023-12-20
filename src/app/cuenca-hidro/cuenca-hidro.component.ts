import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { Attribute } from '@angular/compiler';

@Component({
  selector: 'app-cuenca-hidro',
  templateUrl: './cuenca-hidro.component.html',
  styleUrls: ['./cuenca-hidro.component.css'],
})
export class CuencaHidroComponent implements OnInit {
  constructor(public wsSocket: SocketService, private router: Router) {}

  data: any
  video: any;
  cssAnimate= 'desvanecer';

  videoES:boolean=false;
  videoEN:boolean=false;

  ngOnInit() {
    this.wsSocket.homeEscuchar().subscribe((data: any) => {
      this.router.navigateByUrl(data);
    
    });

    this.recibiendoPortal();
    this.idioma();

  }

  recibiendoPortal() {

    this.wsSocket.escuchandoPortal().subscribe((data) => {
        this.data=data;
        this.router.navigateByUrl(this.data);
    });

   
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

    });

  }


 


}