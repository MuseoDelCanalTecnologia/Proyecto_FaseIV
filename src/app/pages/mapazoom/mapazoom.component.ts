import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/interface/titulo';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mapazoom',
  templateUrl: './mapazoom.component.html',
  styleUrls: ['./mapazoom.component.css'],
})
export class MapazoomComponent implements OnInit {
  video = 'cuenca';
  Elementos: [] = [];
  interface: Titulo | any;
  Titulo: string = 'Cuenca Hidrografica del Canal';
  Img: String = '../../../assets/images/canal4.jpg';
  desc: string =
    'Panamá es uno de los mayores administradores de agua en el mundo. Al aprovechar su posición geográfica y el uso de sus aguas, Panamá presta un servicio único al comercio mundial por medio de su Canal.  Debido a su ubicación y orientación, en la Cuenca se registra una abundante precipitación pluvial en gran parte del año (González, 2002). Entre los ríos principales de la CHCP están el Chagres, Gatún, Boquerón, Pequení, Cirí Grande y Trinidad. Además existe una significativa red de quebradas, riachuelos y ríos secundarios, lo mismo que dos lagos: Alhajuela y Gatún. ';

  cssTexto: string = '';
  cssImg:string = '';
  recurso:string="";

  constructor(
    public wsSocket: SocketService,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.enviarVideo();
    this.getDatacuenca();
  }

  enviarVideo() {
    this.wsSocket.enviarVideo(this.video);
  }

  enviarHome() {
    this.wsSocket.homeRoute('proyeccion');
  }

  parqueNaturales() {
    this.Titulo = 'Cuenca Hidrografica del Canal';
    this.Img = '../../../assets/images/canal4.jpg';
    this.desc =
      'Panamá es uno de los mayores administradores de agua en el mundo. Al aprovechar su posición geográfica y el uso de sus aguas, Panamá presta un servicio único al comercio mundial por medio de su Canal. Debido a su ubicación y orientación, en la Cuenca se registra una abundante precipitación pluvial en gran parte del año (González, 2002). Entre los ríos principales de la CHCP están el Chagres, Gatún, Boquerón, Pequení, Cirí Grande y Trinidad. Además existe una significativa red de quebradas, riachuelos y ríos secundarios, lo mismo que dos lagos: Alhajuela y Gatún.';
      this.wsSocket.envioPortal("nul");
  }

  rios() {
    this.Titulo = 'Subcuencas y Ríos';
    this.Img = '../../../assets/images/canal3.jpg';
    this.desc =
      'rios panama cerca Zona del Canal';
      this.wsSocket.envioPortal("null");
  }

  //1
  barroColorado() {

    this.interface = this.Elementos.slice(0, 1);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });

  }
  //2
  altosCampana() {

    this.interface = this.Elementos.slice(0, 2);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);

      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });
  }
  //3
  parqueSoberania() {

    this.interface = this.Elementos.slice(0, 3);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });
  }

  //4
  caminoCruces() {
    this.interface = this.Elementos.slice(0, 4);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);

      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });
  }
  //5
  parqueChagres() {

    this.interface = this.Elementos.slice(0, 5);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });


  }

  //6
  lagoGatun() {
 
    this.interface = this.Elementos.slice(0, 6);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);

      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });


  }
  //7
  rioCiriGrande() {

    this.interface = this.Elementos.slice(0, 7);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });

  }
  //8
  rioTrinidad() {

    this.interface = this.Elementos.slice(0, 8);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);

      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });
  }
  //9
  rioQuebrado() {

    this.interface = this.Elementos.slice(0, 9);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);

      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });
  }
  //10
  rioGatun() {

    this.interface = this.Elementos.slice(0, 10);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);

      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });
  }
  //11
  rioPequeni() {

    this.interface = this.Elementos.slice(0, 11);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });

  }
  //12
  rioChagres() {
  
    this.interface = this.Elementos.slice(0, 12);
    this.interface.forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.wsSocket.envioPortal(this.recurso=element.video);

      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });

  }

  getDatacuenca() {
    this.http.get<[]>('assets/data/cuenca.json').subscribe((data) => {
      this.Elementos = data;
    });
  }
}
