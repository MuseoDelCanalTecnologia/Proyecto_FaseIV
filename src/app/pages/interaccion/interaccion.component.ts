import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpClient } from '@angular/common/http';
import { Titulo } from 'src/app/interface/titulo';
import { CssSelector } from '@angular/compiler';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-interaccion',
  templateUrl: './interaccion.component.html',
  styleUrls: ['./interaccion.component.css'],
})
export class InteraccionComponent implements OnInit {
  @Input() public classValue = 'circle';

  Elementos: [] = [];
  interface: Titulo | any;
  Titulo: string = 'Areas Revertidas';
  Img: String = '../../../assets/images/canal4.jpg';
  desc: string =
    'Se estima que en el país existen alrededor de 270 especies de mamíferos silvestres, y de estas, unas 160 se encuentran en la cuenca del Canal. De las 33 especies de mamíferos consideradas en peligro de extinción o vulnerables, 30 habitan en esta zona, entre esas: el jaguar, el tapir y el puerco de monte. En cuanto a las aves, de más de mil especies en el país, poco más de la mitad está en el área de Cuenca, de las cuales más de 150 son consideradas vulnerables o en peligro por las normas nacionales de MiAmbiente. Hasta 1999, la Cuenca del Canal cubría un área de 326 mil hectáreas, que corresponde a la cuenca que abastece de agua a los lagos Alhajuela y Gatún.';

  cssAnimate: String = '';
  recurso:string = '';

  constructor(public wsSocket: SocketService, private http: HttpClient) {}
  video = 'portal';
  ngOnInit() {
    this.enviarVideo();
    this.getDataMilitares();
  }

  enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  baseMilitar() {

    this.wsSocket.envioPortal("base Militar Comienzo");

    this.Titulo = 'Areas Reverdidas';
    this.Img = '../../../assets/images/canal4.jpg';
    this.desc =
      'Se estima que en el país existen alrededor de 270 especies de mamíferos silvestres, y de estas, unas 160 se encuentran en la cuenca del Canal. De las 33 especies de mamíferos consideradas en peligro de extinción o vulnerables, 30 habitan en esta zona, entre esas: el jaguar, el tapir y el puerco de monte. En cuanto a las aves, de más de mil especies en el país, poco más de la mitad está en el área de Cuenca, de las cuales más de 150 son consideradas vulnerables o en peligro por las normas nacionales de MiAmbiente. Hasta 1999, la Cuenca del Canal cubría un área de 326 mil hectáreas, que corresponde a la cuenca que abastece de agua a los lagos Alhajuela y Gatún.';
   
  }
//1
  Ftshemran() {
    
    

    this.interface = this.Elementos.slice(0, 1);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
      
    });
  }
  //2 

  FtDavis() {


    this.interface = this.Elementos.slice(0, 2);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

  //3

  FtGulick() {
    
    this.interface = this.Elementos.slice(0, 3);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

  //4
  FtClayton() {


    this.interface = this.Elementos.slice(0, 4);
    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

 //5
  FtAmador() {

  

    this.interface = this.Elementos.slice(0, 5);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

  //6

  FtGrant() {


    this.interface = this.Elementos.slice(0, 6);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

  //7

  FtKobbe() {



    this.interface = this.Elementos.slice(0, 7);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }


  //8 
  QuarryHeights() {



    this.interface = this.Elementos.slice(0, 8);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }


  //9
  PuestoCorozal() {



    this.interface = this.Elementos.slice(0, 9);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

 //10

  NavalBase() {



    this.interface = this.Elementos.slice(0, 10);
    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

  //11

  CocoSolo() {



    this.interface = this.Elementos.slice(0, 11);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }
  //12
  EstacionSummit() {


    this.interface = this.Elementos.slice(0, 12);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

  //13
  EstacionFarfan() {

 

    this.interface = this.Elementos.slice(0, 13);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }


  //14
  BaseAlbrook() {

    

    this.interface = this.Elementos.slice(0, 14);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

//15

  BaseHoward() {

   
    this.interface = this.Elementos.slice(0, 15);

    this.interface.forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssAnimate = element.css;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssAnimate = '';
      }, 1000);
    });
  }

  getDataMilitares() {
    this.http.get<[]>('assets/data/titulos.json').subscribe((data) => {
      this.Elementos = data;
    });
  }
}
