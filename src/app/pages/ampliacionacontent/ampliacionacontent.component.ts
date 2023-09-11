import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/interface/titulo';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-ampliacionacontent',
  templateUrl: './ampliacionacontent.component.html',
  styleUrls: ['./ampliacionacontent.component.css']
})
export class AmpliacionacontentComponent  {

  

  constructor(public wsSocket: SocketService, private http: HttpClient) {}
 

  ngOnInit() {
  this.enviarPortal();
  }

  enviarPortal() {
    this.wsSocket.envioPortal('sub-intro');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 
  



}