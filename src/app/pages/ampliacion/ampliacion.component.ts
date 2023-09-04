import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/interface/titulo';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-ampliacion',
  templateUrl: './ampliacion.component.html',
  styleUrls: ['./ampliacion.component.css'],
})
export class AmpliacionComponent {
  Elementos: [] = [];
  interface: Titulo | any;
  
  Titulo: string = 'Ampliación del Canal ';
  Img: String = '../../../assets/images/canal4.jpg';
  desc: string =
    'Panamá es uno de los mayores administradores de agua en el mundo. Al aprovechar su posición geográfica y el uso de sus aguas, Panamá presta un servicio único al comercio mundial por medio de su Canal.'+'\n'+' Debido a su ubicación y orientación, en la Cuenca se registra una abundante precipitación pluvial en gran parte del año (González, 2002). Entre los ríos principales de la CHCP están el Chagres, Gatún, Boquerón, Pequení, Cirí Grande y Trinidad. Además existe una significativa red de quebradas, riachuelos y ríos secundarios, lo mismo que dos lagos: Alhajuela y Gatún.';

  cssTexto: String = '';
  cssImg: string = '';
  recurso: string = '';

  constructor(public wsSocket: SocketService, private http: HttpClient) {}
  video = '2';

  ngOnInit() {
    this.enviarVideo();

  }

  enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

}