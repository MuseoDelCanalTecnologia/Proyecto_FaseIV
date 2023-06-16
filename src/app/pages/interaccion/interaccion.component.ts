import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaccion',
  templateUrl: './interaccion.component.html',
  styleUrls: ['./interaccion.component.css']
})
export class InteraccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  openNewTab():void{
    window.open('/proyeccion');
  }

  openNewTab2():void{
    window.open('/mapa');
  }

}
