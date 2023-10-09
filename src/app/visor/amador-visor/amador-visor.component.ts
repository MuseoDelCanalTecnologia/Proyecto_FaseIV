import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-amador-visor',
  templateUrl: './amador-visor.component.html',
  styleUrls: ['./amador-visor.component.css']
})
export class AmadorVisorComponent implements OnInit {

  constructor(private socket:SocketService) { }

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
