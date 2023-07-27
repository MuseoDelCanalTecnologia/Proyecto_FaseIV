import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-pro2',
  templateUrl: './pro2.component.html',
  styleUrls: ['./pro2.component.css']
})
export class Pro2Component implements OnInit {

  constructor(public wsSocket: SocketService,private router:Router) { }

  ngOnInit() {

   this.wsSocket.homeEscuchar().subscribe((data:any)=>{
    this.router.navigateByUrl(data);
    console.log(data);
    
   });



   
   this.reciboAmpliacion();
  

  }

  
  reciboAmpliacion(){
    this.wsSocket.escuchandoPortal().subscribe(
      (data:any)=>{
        this.router.navigateByUrl(data);
        console.log(data);
      }
    )
  }


}
