import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-barrocolorado-eng',
  templateUrl: './barrocolorado-eng.component.html',
  styleUrls: ['./barrocolorado-eng.component.css']
})
export class BarrocoloradoEngComponent implements OnInit {

 
  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('barro-colorado');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('rio-chagres');
  }
  

}
