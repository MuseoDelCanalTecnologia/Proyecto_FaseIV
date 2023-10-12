import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-portal-socket',
  templateUrl: './portal-socket.component.html',
  styleUrls: ['./portal-socket.component.css']
})
export class PortalSocketComponent implements OnInit {

  videoES:boolean=false;
  videoEN:boolean=false;
  
  constructor(public wsSocket: SocketService, private router:Router) { }
  data:any;
  video:any;

  ngOnInit() {
    
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
    // document.getElementById('video')?.setAttribute("src",this.data)
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
