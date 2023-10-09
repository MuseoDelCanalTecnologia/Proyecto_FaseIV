import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-altocampana-eng',
  templateUrl: './altocampana-eng.component.html',
  styleUrls: ['./altocampana-eng.component.css']
})
export class AltocampanaEngComponent implements OnInit {
  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion();

  }


  
  enviarProyeccion() {
    this.wsSocket.envioPortal('altos-campana');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('rio-chagres');
  }

}
