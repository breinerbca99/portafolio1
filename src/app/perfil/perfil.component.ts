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
    descripcion: 'Diseño de la logica de paginas web como apps, generacion de API'
  }, {
    nombre: 'Frontend',
    descripcion: 'Realizacion de paginas web PWA, consumo de servicios Rest, generacion de diseños amigables y responsivos'
  }, {
    nombre: 'Cloud , devops',
    descripcion: 'Conocimientos en la nube , despliegue de aplicaciones dockerizadas y uso eficiente de la nube Azure'
  }, {
    nombre: 'Base de datos',
    descripcion: 'Conocimiento del lenguaje SQL y noSQL avanzados con realizacion de estas diferentes modelo de base de datos en proyectos'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
