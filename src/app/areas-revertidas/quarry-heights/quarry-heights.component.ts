import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-quarry-heights',
  templateUrl: './quarry-heights.component.html',
  styleUrls: ['./quarry-heights.component.css']
})
export class QuarryHeightsComponent implements OnInit {
  data:any
  constructor(private wsSocket:SocketService, private router: Router) { }
  videoES:boolean=false;
  videoEN:boolean=false;
  
  ngOnInit(): void {
    this.wsSocket.homeEscuchar().subscribe((data:any)=>{
      this.router.navigateByUrl(data);
      
      
     });

     this.recibiendoPortal();
     this.idioma();

  }



  recibiendoPortal(){

    this.wsSocket.escuchandoPortal().subscribe((data)=>{
      
    this.data=data;
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
