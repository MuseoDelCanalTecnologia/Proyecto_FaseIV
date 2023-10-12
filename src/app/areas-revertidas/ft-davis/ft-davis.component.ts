import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-ft-davis',
  templateUrl: './ft-davis.component.html',
  styleUrls: ['./ft-davis.component.css']
})
export class FtDavisComponent implements OnInit {
  data:any;
  constructor(private wsSocket: SocketService, private router:Router,private id_router:ActivatedRoute) { }
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
