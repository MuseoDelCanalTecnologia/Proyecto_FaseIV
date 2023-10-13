import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpClient } from '@angular/common/http';
import { Titulo } from 'src/app/interface/titulo';
import { CssSelector } from '@angular/compiler';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sherman-eng',
  templateUrl: './sherman-eng.component.html',
  styleUrls: ['./sherman-eng.component.css']
})
export class ShermanEngComponent implements OnInit {

  
  event:any
  constructor(private wsSocket:SocketService) { }
 valor:string = '';
  ngOnInit(): void {
    this.valor="glass-plus";
    this.enviarProyeccion();
    this.idioma();
    
  }


  enviarProyeccion() {
    this.wsSocket.envioPortal('ft-sherma');
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
      this.wsSocket.envioPortal('sherman-visor');
      this.carusel();
    }else{
      this.valor="glass-plus"
      this.wsSocket.envioPortal('ft-sherma');
      this.idioma();
    }



  }
  idioma(){
    this.wsSocket.idiomaPost('en');
  }

  
  nextImg(){
    this.wsSocket.imgIn('next');
  }
  
  prevImg(){
    this.wsSocket.imgIn('prev');
  }

  carusel(){


    document.getElementById('btnCarusel')?.click();
    
  }

}
