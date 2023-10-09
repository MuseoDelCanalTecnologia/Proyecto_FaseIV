import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-introareas-eng',
  templateUrl: './introareas-eng.component.html',
  styleUrls: ['./introareas-eng.component.css']
})
export class IntroareasEngComponent implements OnInit {
 constructor(public wsSocket: SocketService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  this.enviarVideo();
   
  }


  enviarVideo() {
    this.wsSocket.enviarVideo('cuenca');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

}
