import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-rio-trinidad',
  templateUrl: './rio-trinidad.component.html',
  styleUrls: ['./rio-trinidad.component.css']
})

export class RioTrinidadComponent implements OnInit {

  data:any;
  constructor(private wsSocket:SocketService, private router:Router) { }

  videoES:boolean=false;
  videoEN:boolean=false;

  ngOnInit(): void {

    this.wsSocket.homeEscuchar().subscribe((data:any)=>{
      this.router.navigateByUrl(data);
      console.log(data);
      
     });

     this.recibiendoPortal();
     this.idioma();
  }

  recibiendoPortal(){

    this.wsSocket.escuchandoPortal().subscribe((data)=>{
      
    this.data=data;

    
      this.router.navigateByUrl(this.data);


    });
  }

  idioma(){

    this.wsSocket.idiomaGet().subscribe((data)=>{
      console.log('panel-lago gatun:',data);
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
