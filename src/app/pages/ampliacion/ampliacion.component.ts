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
    this.getData();
  }

  enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  Ampliacion(){

    this.Titulo = 'Ampliación del Canal ';
    this.Img= '../../../assets/images/canal4.jpg';
    this.desc =
      'Panamá es uno de los mayores administradores de agua en el mundo. Al aprovechar su posición geográfica y el uso de sus aguas, Panamá presta un servicio único al comercio mundial por medio de su Canal.'+'\n'+' Debido a su ubicación y orientación, en la Cuenca se registra una abundante precipitación pluvial en gran parte del año (González, 2002). Entre los ríos principales de la CHCP están el Chagres, Gatún, Boquerón, Pequení, Cirí Grande y Trinidad. Además existe una significativa red de quebradas, riachuelos y ríos secundarios, lo mismo que dos lagos: Alhajuela y Gatún.';
  }

//get data
  getData() {
    this.http.get<[]>('assets/data/ampliacion.json').subscribe((data) => {
      this.Elementos = data;
    });
  }

  a1(){

    this.interface = this.Elementos.slice(0, 1);
    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal((this.recurso = element.video));
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
  }
  a2(){
    
    this.interface = this.Elementos.slice(0, 2);
    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal((this.recurso = element.video));
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
  }
  a3(){
    
    this.interface = this.Elementos.slice(0, 3);
    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal((this.recurso = element.video));
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
  }
  a4(){
    
    this.interface = this.Elementos.slice(0, 4);
    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal((this.recurso = element.video));
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
  }
  a5(){
    
    this.interface = this.Elementos.slice(0, 5);
    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal((this.recurso = element.video));
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
  }







  


}
