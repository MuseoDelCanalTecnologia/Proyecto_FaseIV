import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-emperador',
  templateUrl: './emperador.component.html',
  styleUrls: ['./emperador.component.css']
})
export class EmperadorComponent implements OnInit {
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

    this.router.navigateByUrl(this.data);

    


    });
  }

}
