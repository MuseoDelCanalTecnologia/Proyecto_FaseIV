import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-albrook-visor',
  templateUrl: './albrook-visor.component.html',
  styleUrls: ['./albrook-visor.component.css']
})
export class AlbrookVisorComponent implements OnInit {

  constructor( private socket:SocketService) { }

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
