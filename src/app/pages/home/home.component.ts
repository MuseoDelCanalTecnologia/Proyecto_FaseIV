import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor() {
    
   }

  ngOnInit() {

   

   
    
  }


  openNewTab():void{
    window.open('/proyeccion');
  }

  openNewTab2():void{
    window.open('/mapa');
  }

}
