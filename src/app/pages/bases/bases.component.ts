import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpClient } from '@angular/common/http';
import { Titulo } from 'src/app/interface/titulo';
import { CssSelector } from '@angular/compiler';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {

  @Input() public classValue = 'circle';

  Elementos: [] = [];
  ElementosPoligonos: [] = [];
  interface: Titulo | any;
  interfacePoligono: Titulo | any;
  Titulo: string = 'Areas Revertidas';
  Img: String = '../../../assets/images/canal4.jpg';
  desc: string =
    'Para Estados Unidos, el Canal de Panamá era importante no solo por su valor comercial, sino también por su valor militar. Si bien el gobierno estadounidense inicialmente mandó a construir fortificaciones en el sector Atlántico y Pacífico para la defensa de la vía interoceánica; con el estallido de las dos Guerras Mundiales, y posteriormente con la Guerra Fría, la bases militares tuvieron mayor énfasis en lo que se llamó la “protección del hemisferio”, lo que quería decir, la protección del continente de la presencia comunista. Sin embargo, con la entrada en vigor de los Tratados Torrijos-Carter y el fin de la Guerra Fría, las bases militares fueron perdiendo relevancia gradualmente hasta ser revertidas completamente a la República de Panamá.';

  cssTexto: String = '';
  cssImg: string = '';
  recurso: string = '';

  constructor(public wsSocket: SocketService, private http: HttpClient, private route:Router) {}
  
  ngOnInit() {

    this.enviarProyeccion();
   
  }

  enviarProyeccion() {
    this.wsSocket.envioPortal('mapazoom');
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  areaRevertida(){
    this.wsSocket.envioPortal('portal');
  }


 


}
