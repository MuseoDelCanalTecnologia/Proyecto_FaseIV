import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { Attribute } from '@angular/compiler';

@Component({
  selector: 'app-cuenca-hidro',
  templateUrl: './cuenca-hidro.component.html',
  styleUrls: ['./cuenca-hidro.component.css'],
})
export class CuencaHidroComponent implements OnInit {
  constructor(public wsSocket: SocketService, private router: Router) {}
  data: any
  video: any;
  cssAnimate= 'desvanecer';

  ngOnInit() {
    this.wsSocket.homeEscuchar().subscribe((data: any) => {
      this.router.navigateByUrl(data);
      console.log(data);
    });

    this.recibiendoPortal();
  }

  recibiendoPortal() {

    this.wsSocket.escuchandoPortal().subscribe((data) => {
        this.data=data;
        this.router.navigateByUrl(this.data);
    });

   
  }

 


}