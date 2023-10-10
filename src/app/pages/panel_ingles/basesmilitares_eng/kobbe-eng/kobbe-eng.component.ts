import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-kobbe-eng',
  templateUrl: './kobbe-eng.component.html',
  styleUrls: ['./kobbe-eng.component.css']
})
export class KobbeEngComponent implements OnInit {

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {

    this.enviarProyeccion()

  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-kobbe');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 bases(){
    this.wsSocket.envioPortal('mapazoom');
  }

}
