import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private socket:SocketService, private router:Router) { }
  data:any
  recibe:any
  ngOnInit(): void {
 
    this.recibe=document.getElementById("img-recibe");
    this.socket.slideOut().subscribe(
    
      (data:any)=>{
        this.data=data.toString();
        this.recibe.value=data;
       
      }

    )


    this.recibiendoPortal();
    this.home();


  }





  recibiendoPortal(){
    this.socket.escuchandoPortal().subscribe((data:any)=>{
    this.router.navigateByUrl(data);
    });

  }


  home(){
    
      this.socket.homeEscuchar().subscribe((data:any)=>{
      this.router.navigateByUrl(data);
      console.log(data);
     });
  }

}
