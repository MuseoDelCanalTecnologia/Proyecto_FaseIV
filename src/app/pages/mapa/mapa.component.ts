import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  
  constructor(public wsSocket: SocketService) {   
    
  }

  ngOnInit(){
 
  }

}
