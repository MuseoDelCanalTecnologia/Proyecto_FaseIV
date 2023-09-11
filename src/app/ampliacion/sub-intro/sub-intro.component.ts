import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-sub-intro',
  templateUrl: './sub-intro.component.html',
  styleUrls: ['./sub-intro.component.css'],
})
export class SubIntroComponent implements OnInit {
  data: any;

  constructor(private wsSocket: SocketService, private router: Router) {}

  ngOnInit(): void {
    this.recibiendoPortal();
    this.wsSocket.homeEscuchar().subscribe((data: any) => {
      this.router.navigateByUrl(data);

      console.log(data);
    });

   
  }

  recibiendoPortal() {
    this.wsSocket.escuchandoPortal().subscribe((data) => {


      this.data=data;
      this.router.navigateByUrl(this.data);

      
    });
  }
}