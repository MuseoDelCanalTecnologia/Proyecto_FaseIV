import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/interface/titulo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cuenca',
  templateUrl: './cuenca.component.html',
  styleUrls: ['./cuenca.component.css']
})
export class CuencaComponent implements OnInit {

  video = 'cuenca';
  Elementos: [] = [];
  interface: Titulo | any;
  Titulo: string = 'Cuenca Hidrográfica del Canal';
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
      this.wsSocket.envioPortal("cuenca");
  }

  rios() {
    this.Titulo = 'Subcuencas y Ríos';
    this.Img = '../../../assets/images/canal3.jpg';
    this.desc =
      'rios panama cerca Zona del Canal';
      this.wsSocket.envioPortal("cuenca");
  }

  //1
  barroColorado() {
    this.interface = this.Elementos.slice(0, 1).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
    });

   this.wsSocket.envioPortal(this.recurso);
   this.recurso='';

  }
  //2
  altosCampana() {

    this.interface = this.Elementos.slice(0, 2).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);

    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }
  //3
  parqueSoberania() {

    this.interface = this.Elementos.slice(0, 3).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    
    });


    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }
  //4
  caminoCruces() {
    this.interface = this.Elementos.slice(0, 4).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
     this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);  
     
    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }
  //5
  parqueChagres() {

    this.interface = this.Elementos.slice(0, 5).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
  
    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

 

  }

  //6
  lagoGatun() {
 
    this.interface = this.Elementos.slice(0, 6).forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }
  //7
  rioCiriGrande() {

    this.interface = this.Elementos.slice(0, 7).forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);

    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';
    
  }
  //8
  rioTrinidad() {

    this.interface = this.Elementos.slice(0, 8).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
    
    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }
  //9
  rioQuebrado() {

    this.interface = this.Elementos.slice(0, 9).forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
    
    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }
  //10
  rioGatun() {

    this.interface = this.Elementos.slice(0, 10).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
      
    });
    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';
  }
  //11
  rioPequeni() {

    this.interface = this.Elementos.slice(0, 11).forEach((element: any) => {
      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }
  //12
  rioChagres() {
  
    this.interface = this.Elementos.slice(0, 12).forEach((element: any) => {

      this.Titulo = element.titulo;
      this.Img = element.img;
      this.desc = element.desc;
      this.cssImg=element.cssImg;
      this.cssTexto = element.cssTexto;
      this.recurso=element.ruta;
      setTimeout(() => {
        this.cssTexto = '';
        this.cssImg='';
      }, 1000);
  
    });

    this.wsSocket.envioPortal(this.recurso);
    this.recurso='';

  }

  getDatacuenca() {
    this.http.get<[]>('assets/data/cuenca.json').subscribe((data) => {
      this.Elementos = data;
    });
  }

}
