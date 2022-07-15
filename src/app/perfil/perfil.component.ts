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
    puntos: 'Backend',
    descripcion: 'Diseño de la logica de paginas web como apps, generacion de API',
    img:'assets/imagenes/lenguajes/backend.png',
    icono:'../assets/imagenes/skills/java-brands.svg',
    estilo:'width: 30px !important; height: 40px;margin-top: -5px;'
  }, {
    nombre: 'Frontend',
    puntos: 'Backend',
    descripcion: 'Realizacion de paginas web PWA, consumo de servicios Rest, generacion de diseños amigables y responsivos',
    img:'assets/imagenes/lenguajes/frontend.png',
    icono:'../assets/imagenes/skills/js-brands.svg',
    estilo:'width: 30px !important; height: 30px;'
  }, {
    nombre: 'Cloud , devops',
    puntos: 'Backend',
    descripcion: 'Conocimientos en la nube , despliegue de aplicaciones dockerizadas y uso eficiente de la nube Azure',
    img:'assets/imagenes/lenguajes/cloud1.png',
    icono:'../assets/imagenes/skills/cloud-solid.svg',
    estilo:'width: 45px !important; height: 30px;margin-top: -4px;'
  }, {
    nombre: 'Base de datos',
    puntos: 'Backend',
    descripcion: 'Conocimiento del lenguaje SQL y noSQL avanzados con realizacion de estas diferentes modelo de base de datos en proyectos',
    img:'assets/imagenes/lenguajes/base1.png',
    icono:'../assets/imagenes/skills/database.png',
    estilo:'width: 30px !important; height: 30px;margin-top: -4px;'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
