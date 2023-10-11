import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-clayton-visor',
  templateUrl: './clayton-visor.component.html',
  styleUrls: ['./clayton-visor.component.css'],
})
export class ClaytonVisorComponent implements OnInit {
  constructor(private socket: SocketService, private router:Router) {}

  ngOnInit(): void {
    this.imgTransport();
    this.recibiendoPortal();
    this.home();
  }

  imgTransport() {
    this.socket.imgOut().subscribe((data) => {
      if (data === 'next') {
        document.getElementById('next-img')?.click();
      } else {
        document.getElementById('prev-img')?.click();
      }
    });
  }

  recibiendoPortal() {
    this.socket.escuchandoPortal().subscribe((data: any) => {
      this.router.navigateByUrl(data);
    });
  }

  home() {
    this.socket.homeEscuchar().subscribe((data: any) => {
      this.router.navigateByUrl(data);
      console.log(data);
    });
  }
}
