import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-ft-grant',
  templateUrl: './ft-grant.component.html',
  styleUrls: ['./ft-grant.component.css']
})
export class FtGrantComponent implements OnInit {
  data:any;
  constructor(private wsSocket:SocketService, private router:Router) { }

  ngOnInit(): void {
  
    this.wsSocket.homeEscuchar().subscribe((data:any)=>{
      this.router.navigateByUrl(data);
      console.log(data);
      
     });

     this.recibiendoPortal();

  }



  recibiendoPortal(){

    this.wsSocket.escuchandoPortal().subscribe((data)=>{
      
    this.data=data;

    if(!this.data){
    
      this.router.navigateByUrl(this.data);

    }else{
      //corriendo video
    }


    });

  }

}
