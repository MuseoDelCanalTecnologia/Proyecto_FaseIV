import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-pro1',
  templateUrl: './pro1.component.html',
  styleUrls: ['./pro1.component.css']
})
export class Pro1Component implements OnInit {

  constructor(public wsSocket: SocketService,private router:Router ) { }

  ngOnInit(){
    this.wsSocket.homeEscuchar().subscribe((data:any)=>{
      
      this.router.navigateByUrl(data);
  
  
     });
  }

}
