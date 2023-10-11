import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-introcuenca-eng',
  templateUrl: './introcuenca-eng.component.html',
  styleUrls: ['./introcuenca-eng.component.css']
})
export class IntrocuencaEngComponent implements OnInit {

  constructor(public wsSocket: SocketService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  this.enviarVideo();
  this.idioma();
  }


  enviarVideo() {
    this.wsSocket.enviarVideo('cuenca');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }


  idioma(){
    this.wsSocket.idiomaPost('en');
  }

}
