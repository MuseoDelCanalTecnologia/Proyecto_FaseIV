import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpClient } from '@angular/common/http';
import { Titulo } from 'src/app/interface/titulo';
import { CssSelector } from '@angular/compiler';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesseps-eng',
  templateUrl: './lesseps-eng.component.html',
  styleUrls: ['./lesseps-eng.component.css']
})
export class LessepsEngComponent implements OnInit {

  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
   
    this.idioma();
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('rio-gatun');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

 cuenca(){
    this.wsSocket.envioPortal('cuenca');
  }

  bases(){
    this.wsSocket.envioPortal('mapazoom');
  }


  evento(){

  setInterval(()=>{
    let dato
    this.event=document.getElementById("img-comparacion");
    dato=this.event.value.toString();
    this.wsSocket.slideIn(dato);
   // console.log(dato)  
  },100)

  }


  Mapa(){

   
    if(this.valor=="glass-plus"){
      this.valor="glass-minus"
      this.wsSocket.envioPortal('lesseps-visor');

    }else{
      this.valor="glass-plus"
      this.wsSocket.envioPortal('rio-gatun');

    }



  }

  idioma(){
    this.wsSocket.idiomaPost('en');
  }
}
