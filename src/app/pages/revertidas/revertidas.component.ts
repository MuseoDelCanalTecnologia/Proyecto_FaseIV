import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpClient } from '@angular/common/http';
import { Titulo } from 'src/app/interface/titulo';
import { CssSelector } from '@angular/compiler';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revertidas',
  templateUrl: './revertidas.component.html',
  styleUrls: ['./revertidas.component.css']
})
export class RevertidasComponent implements OnInit {

  @Input() public classValue = 'circle';

 
  Img: String = '../../../assets/images/canal4.jpg';


  constructor(public wsSocket: SocketService, private http: HttpClient, private route:Router) {}
  video = 'portal';
  ngOnInit() {
    this.enviarVideo();
    this.idioma();
  }

  enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  idioma(){
    this.wsSocket.idiomaPost('es');
  }


}
