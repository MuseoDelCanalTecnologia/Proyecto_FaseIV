import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private socket:SocketService) { }
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


  }

}
