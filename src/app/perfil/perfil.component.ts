import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { carrusel } from '../models/carrusel';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {

  carrusel : carrusel[];
  constructor( private router: Router) {}

  ngOnInit(): void {
    this.carrusel = 
    [
      {
        imagenes:[
          'assets/imagenes/adidas/adidas1.png',
          'assets/imagenes/adidas/adidas2.png',
          'assets/imagenes/adidas/adidas3.png',
          'assets/imagenes/adidas/adidas4.png',
          'assets/imagenes/adidas/adidas5.png',
        ]
      },
      {
        imagenes:[
          'assets/imagenes/carrito/1.png',
          'assets/imagenes/carrito/2.png',
          'assets/imagenes/carrito/3.png',
          'assets/imagenes/carrito/4.png',
          'assets/imagenes/carrito/5.png',
        ]
      },
      {
        imagenes:[
          'assets/imagenes/ingreso/ingreso1.png',
          'assets/imagenes/ingreso/ingreso2.png',
          'assets/imagenes/ingreso/ingreso3.png',
          'assets/imagenes/ingreso/ingreso4.png',
          'assets/imagenes/ingreso/ingreso5.png',
        ]
      },
      {
        imagenes:[
          'assets/imagenes/hospital/hospital1.png',
          'assets/imagenes/hospital/hospital2.png',
          'assets/imagenes/hospital/hospital3.png',
          'assets/imagenes/hospital/hospital4.png',
          'assets/imagenes/hospital/hospital5.png',
        ]
      },
      {
        imagenes:[
          'assets/imagenes/examen/examen1.png',
          'assets/imagenes/examen/examen2.png',
          'assets/imagenes/examen/examen3.png',
          'assets/imagenes/examen/examen4.png',
          'assets/imagenes/examen/examen5.png',
        ]
      },
      {
        imagenes:[
          'assets/imagenes/spotify/spotify1.png',
          'assets/imagenes/spotify/spotify2.png',
          'assets/imagenes/spotify/spotify3.png',
          'assets/imagenes/spotify/spotify4.png',
        ]
      },
    ];
    console.log('breiner');
    console.log(this.carrusel);
    
  }

  verProducto(i: string): void {
    this.router.navigate(['/portafolio', i]);
  }
}
