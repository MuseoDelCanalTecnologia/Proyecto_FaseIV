import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpClient } from '@angular/common/http';
import { Titulo } from 'src/app/interface/titulo';
import { CssSelector } from '@angular/compiler';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interaccion',
  templateUrl: './interaccion.component.html',
  styleUrls: ['./interaccion.component.css'],
})
export class InteraccionComponent implements OnInit {
  @Input() public classValue = 'circle';

  Elementos: [] = [];
  ElementosPoligonos: [] = [];
  interface: Titulo | any;
  interfacePoligono: Titulo | any;
  Titulo: string = 'Areas Revertidas';
  Img: String = '../../../assets/images/canal4.jpg';
  desc: string =
    'Se estima que en el país existen alrededor de 270 especies de mamíferos silvestres, y de estas, unas 160 se encuentran en la cuenca del Canal. De las 33 especies de mamíferos consideradas en peligro de extinción o vulnerables, 30 habitan en esta zona, entre esas: el jaguar, el tapir y el puerco de monte. En cuanto a las aves, de más de mil especies en el país, poco más de la mitad está en el área de Cuenca, de las cuales más de 150 son consideradas vulnerables o en peligro por las normas nacionales de MiAmbiente. Hasta 1999, la Cuenca del Canal cubría un área de 326 mil hectáreas, que corresponde a la cuenca que abastece de agua a los lagos Alhajuela y Gatún.';

  cssTexto: String = '';
  cssImg: string = '';
  recurso: string = '';

  constructor(public wsSocket: SocketService, private http: HttpClient, private route:Router) {}
  video = 'portal';
  ngOnInit() {
    this.enviarVideo();
    this.getDataMilitares();
    this.getPoligonos();
  }

  enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  baseMilitar() {
  

    this.Titulo = 'Areas Revertidas';
    this.Img = '../../../assets/images/canal4.jpg';
    this.desc =
      'Se estima que en el país existen alrededor de 270 especies de mamíferos silvestres, y de estas, unas 160 se encuentran en la cuenca del Canal. De las 33 especies de mamíferos consideradas en peligro de extinción o vulnerables, 30 habitan en esta zona, entre esas: el jaguar, el tapir y el puerco de monte. En cuanto a las aves, de más de mil especies en el país, poco más de la mitad está en el área de Cuenca, de las cuales más de 150 son consideradas vulnerables o en peligro por las normas nacionales de MiAmbiente. Hasta 1999, la Cuenca del Canal cubría un área de 326 mil hectáreas, que corresponde a la cuenca que abastece de agua a los lagos Alhajuela y Gatún.';
      this.wsSocket.envioPortal('portal');
  }

  Poligono() {
   

    this.Titulo = 'Poligonos de Tiros';
    this.Img = '../../../assets/images/canal4.jpg';
    this.desc = 'Poligonos Description';
    this.wsSocket.envioPortal('portal');
  }

  //1
  Ftshemran() {

    this.interface = this.Elementos.slice(0, 1).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso= element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';


  }
  //2

  FtDavis() {

    this.interface = this.Elementos.slice(0, 2).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      
      }, 1000);

    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';

  }

  //3

  FtGulick() {

    this.interface = this.Elementos.slice(0, 3).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso= element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';
  }

  //4
  FtClayton() {

    this.interface = this.Elementos.slice(0, 4).forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);

    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';

  }

  //5
  FtAmador() {
    this.interface = this.Elementos.slice(0, 5).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso = element.ruta
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';
  }

  //6

  FtGrant() {
    this.interface = this.Elementos.slice(0, 6).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso= element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';
  }

  //7

  FtKobbe() {

    this.interface = this.Elementos.slice(0, 7).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';

  }

  //8
  QuarryHeights() {
    this.interface = this.Elementos.slice(0, 8).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';
  }

  //9
  PuestoCorozal() {
    this.interface = this.Elementos.slice(0, 9).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';


  }

  //10

  NavalBase() {
    this.interface = this.Elementos.slice(0, 10).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';


  }

  //11

  CocoSolo() {
    this.interface = this.Elementos.slice(0, 11).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
   
    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';
    

  }
  //12
  EstacionSummit() {
    this.interface = this.Elementos.slice(0, 12).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg = '';
      }, 1000);
    });
 
       
    this.wsSocket.envioPortal((this.recurso));
    this.recurso='';


  }

  //13
  EstacionFarfan() {
    this.interface = this.Elementos.slice(0, 13).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssImg = '';
        this.cssTexto = '';
      }, 1000);
    });
 
    this.wsSocket.envioPortal((this.recurso));
    this.recurso=''; 

  }

  //14
  BaseAlbrook() {
    this.interface = this.Elementos.slice(0, 14).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssImg = '';
        this.cssTexto = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso=''; 

  }

  //15

  BaseHoward() {

    this.interface = this.Elementos.slice(0, 15).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssImg = '';
        this.cssTexto = '';
      }, 1000);
    });
   
    this.wsSocket.envioPortal((this.recurso));
    this.recurso=''; 

  }
  //data Militares JSON
  getDataMilitares() {
    this.http.get<[]>('assets/data/revertida.json').subscribe((data) => {
      this.Elementos = data;
    });
  }

  //data Poligonos de tiros
  getPoligonos() {
    this.http.get<[]>('assets/data/poligonos.json').subscribe((data) => {
      this.ElementosPoligonos = data;
    });
  }

  pSherman() {

    this.interfacePoligono = this.ElementosPoligonos.slice(0, 1).forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso= element.ruta;
      setTimeout(() => {
        this.cssImg = '';
        this.cssTexto = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso=''; 

  }
 
  pina(){
    this.interfacePoligono = this.ElementosPoligonos.slice(0, 2).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssImg = '';
        this.cssTexto = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso=''; 

  }

 balboaOeste(){

   this.interfacePoligono = this.ElementosPoligonos.slice(0, 3).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssImg = '';
        this.cssTexto = '';
      }, 1000);
    });

    this.wsSocket.envioPortal((this.recurso));
    this.recurso=''; 

 }

 emperador(){
  this.interfacePoligono = this.ElementosPoligonos.slice(0, 4).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg = element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssImg = '';
        this.cssTexto = '';
      }, 1000);
    });
    this.wsSocket.envioPortal((this.recurso));
    this.recurso=''; 
 }

 rioHato(){
  this.interfacePoligono = this.ElementosPoligonos.slice(0, 5).forEach((element: any) => {
    this.Titulo = element.titulo;
    this.Img = element.img;
    this.desc = element.desc;
    this.cssImg = element.cssImg;
    this.cssTexto = element.cssTexto;
    this.recurso= element.ruta;
    setTimeout(() => {
      this.cssImg = '';
      this.cssTexto = '';
    }, 1000);
  });

  this.wsSocket.envioPortal((this.recurso));
  this.recurso=''; 
 }

 sanJose(){

  this.interfacePoligono = this.ElementosPoligonos.slice(0, 6).forEach((element: any) => {
    this.Titulo = element.titulo;
    this.Img = element.img;
    this.desc = element.desc;
    this.cssImg = element.cssImg;
    this.cssTexto = element.cssTexto;
    this.recurso=element.ruta;
    setTimeout(() => {
      this.cssImg = '';
      this.cssTexto = '';
    }, 1000);
  });

  this.wsSocket.envioPortal((this.recurso));
  this.recurso=''; 
  
 }

}
