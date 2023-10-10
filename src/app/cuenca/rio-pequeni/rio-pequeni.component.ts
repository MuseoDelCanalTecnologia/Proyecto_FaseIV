import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-rio-pequeni',
  templateUrl: './rio-pequeni.component.html',
  styleUrls: ['./rio-pequeni.component.css']
})
export class RioPequeniComponent implements OnInit {

  constructor(private wsSocket:SocketService , private router: Router) { }
  data:any
  
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
      console.log('panel subcuenca-rios:',data);
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
