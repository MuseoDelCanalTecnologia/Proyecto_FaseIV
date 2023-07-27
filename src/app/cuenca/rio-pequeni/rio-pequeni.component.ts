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
