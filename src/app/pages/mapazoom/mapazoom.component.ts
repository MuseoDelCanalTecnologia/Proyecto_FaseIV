import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/interface/titulo';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mapazoom',
  templateUrl: './mapazoom.component.html',
  styleUrls: ['./mapazoom.component.css'],
})
export class MapazoomComponent implements OnInit {
 
data:any;
  constructor(
    public wsSocket: SocketService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
   
    this.wsSocket.homeEscuchar().subscribe((data:any)=>{
      this.router.navigateByUrl(data);
      console.log(data);
     });


     this.recibiendoPortal()
  }


  recibiendoPortal(){

    this.wsSocket.escuchandoPortal().subscribe((data)=>{
    this.data=data;
    this.router.navigateByUrl(this.data);
    // document.getElementById('video')?.setAttribute("src",this.data)
    });

  }



 

  

  

}
