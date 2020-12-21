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
        ],
        titulo:'Proyecto Adidas',
        descripcion:'Este proyecto es una réplica de la empresa Adidas en la cual generamos las vistas para el usuario y para un administrador ',
        lenguajes:'Spring y Angular'
      },
      {
        imagenes:[
          'assets/imagenes/carrito/1.png',
          'assets/imagenes/carrito/2.png',
          'assets/imagenes/carrito/3.png',
          'assets/imagenes/carrito/4.png',
          'assets/imagenes/carrito/5.png',
        ],
        titulo:'Carrito de compra',
        descripcion:'Este proyecto simula un carrito de compras con distintas formas de pago Java EE y servlets',
        lenguajes:'Java y servlets'
      },
      {
        imagenes:[
          'assets/imagenes/ingreso/ingreso1.png',
          'assets/imagenes/ingreso/ingreso2.png',
          'assets/imagenes/ingreso/ingreso3.png',
          'assets/imagenes/ingreso/ingreso4.png',
          'assets/imagenes/ingreso/ingreso5.png',
        ],
        titulo:'Redux ingreso –egreso',
        descripcion:'Este proyecto permitirá ver el ingreso y egresos que tuvo una persona en su rutina ',
        lenguajes:'Angular y Redux '
      },
      {
        imagenes:[
          'assets/imagenes/hospital/hospital1.png',
          'assets/imagenes/hospital/hospital2.png',
          'assets/imagenes/hospital/hospital3.png',
          'assets/imagenes/hospital/hospital4.png',
          'assets/imagenes/hospital/hospital5.png',
        ],
        titulo:'Proyecto Hospital',
        descripcion:'Este proyecto permite manejar usuarios, doctores, hospitales y pacientes',
        lenguajes:'Node y Angular'
      },
      {
        imagenes:[
          'assets/imagenes/examen/examen1.png',
          'assets/imagenes/examen/examen2.png',
          'assets/imagenes/examen/examen3.png',
          'assets/imagenes/examen/examen4.png',
          'assets/imagenes/examen/examen5.png',
        ],
        titulo:'Proyecto Aula virtual',
        descripcion:'Este proyecto permite rendir a un alumno un examen, matricularse en un curso y ver los exámenes del curso',
        lenguajes:'Spring (Microservicios) y Angular'
      },
      {
        imagenes:[
          'assets/imagenes/spotify/spotify1.png',
          'assets/imagenes/spotify/spotify2.png',
          'assets/imagenes/spotify/spotify3.png',
          'assets/imagenes/spotify/spotify4.png',
        ],
        titulo:'Spotify',
        descripcion:'Este proyecto permite a los usuarios poder guardar a sus artistas preferidos, sus álbumes y las canciones de esos álbumes.',
        lenguajes:'Node y Angular'
      },
    ];
    
  }

  verProducto(i: string): void {
    this.router.navigate(['/portafolio', i]);
  }
}
