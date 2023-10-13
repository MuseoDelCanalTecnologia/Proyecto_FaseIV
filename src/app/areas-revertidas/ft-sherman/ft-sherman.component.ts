import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-ft-sherman',
  templateUrl: './ft-sherman.component.html',
  styleUrls: ['./ft-sherman.component.css']
})
export class FtShermanComponent implements OnInit {
 
  data:any;
  videoES:boolean=false;
  videoEN:boolean=false;
  
  
  constructor(private wsSocket: SocketService, private router:Router) { }

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
