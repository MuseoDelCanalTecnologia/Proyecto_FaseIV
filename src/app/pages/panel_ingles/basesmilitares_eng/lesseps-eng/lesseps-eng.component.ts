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

  constructor(private wsSocket:SocketService) { }

  ngOnInit(): void {
    this.enviarProyeccion();
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('estacion-farfam');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  bases(){
    this.wsSocket.envioPortal('mapazoom');
  }
}
