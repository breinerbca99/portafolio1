import { Component, OnInit } from '@angular/core';
import { Servicio } from '../models/servicio';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  servicios: Servicio[] = [{
    nombre: 'Backend',
    descripcion: 'Diseño de la logica de paginas web como apps, generacion de API',
    img:'assets/imagenes/lenguajes/backend.png'
  }, {
    nombre: 'Frontend',
    descripcion: 'Realizacion de paginas web PWA, consumo de servicios Rest, generacion de diseños amigables y responsivos',
    img:'assets/imagenes/lenguajes/frontend.png'
  }, {
    nombre: 'Cloud , devops',
    descripcion: 'Conocimientos en la nube , despliegue de aplicaciones dockerizadas y uso eficiente de la nube Azure',
    img:'assets/imagenes/lenguajes/cloud1.png'
  }, {
    nombre: 'Base de datos',
    descripcion: 'Conocimiento del lenguaje SQL y noSQL avanzados con realizacion de estas diferentes modelo de base de datos en proyectos',
    img:'assets/imagenes/lenguajes/base1.png'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
