import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() proyecto : Proyecto;
  @Input() orden : String;

  constructor() { }

  

  ngOnInit(): void {
  }

}
