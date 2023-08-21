import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { HttpClient } from '@angular/common/http';
import { Titulo } from 'src/app/interface/titulo';
import { CssSelector } from '@angular/compiler';
import { NgClass, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sherman',
  templateUrl: './sherman.component.html',
  styleUrls: ['./sherman.component.css']
})
export class PanelShermanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}