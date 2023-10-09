import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-rodman-visor',
  templateUrl: './rodman-visor.component.html',
  styleUrls: ['./rodman-visor.component.css']
})
export class RodmanVisorComponent implements OnInit {

  constructor(private socket: SocketService) { }

  ngOnInit(): void {

  this.imgTransport();

  }



  imgTransport(){

    this.socket.imgOut().subscribe((data)=>{
      if(data==="next"){
       document.getElementById("next-img")?.click();
      }else{
        document.getElementById("prev-img")?.click();
      }
    });
    
  }

}
