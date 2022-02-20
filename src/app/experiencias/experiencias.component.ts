import { Component, OnInit, Input } from '@angular/core';
import { Experiencia } from '../models/experencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  @Input() entrada :boolean;

  experiencias: Experiencia[] = [{
    centroTrabajo: 'BBVA',
    puesto: 'Java Developer',
    descripcion: 'Transacciones APX para comunicación entre BBVA y Rimac Seguro',
    tecnologia: 'Jenkins, ASO, APX, SonarQube',
    anio: 2021
  },{
    centroTrabajo: 'BBVA',
    puesto: 'Java Developer',
    descripcion: 'Consumo de servicios APX para la comunicación con Despegar',
    tecnologia: 'Spring, RxJava, JBOSS, Jenkins, ASO, APX, SonarQube',
    anio: 2021
  },{
    centroTrabajo: 'BBVA',
    puesto: 'Java Developer',
    descripcion: 'Equipo Realavility Cotiza tipo de cambio',
    tecnologia: 'Spring, Drools, Kibana, SQL Server, Oracle',
    anio: 2021
  },{
    centroTrabajo: 'Open TI S.AC',
    puesto: 'Full-Stack Developer',
    descripcion: 'Reserva de Citas de usuarios para medicos',
    tecnologia: 'Spring, Angular, Bootstrap, PostgreSQL',
    anio: 2021
  },{
    centroTrabajo: 'Proyecto Personal',
    puesto: 'Full-Stack Developer',
    descripcion: 'Tienda Online freelance',
    tecnologia: 'Spring, Angular, MySQL',
    anio: 2021
  }];

  educaciones: Experiencia[] = [{
    centroTrabajo: 'Universidad San Marcos',
    puesto: '2017 - 2021',
    descripcion: 'Soy un estudiante de la universidad san Marcos ',
    tecnologia: 'Jenkins, ASO, APX, SonarQube',
    anio: 2021
  },{
    centroTrabajo: 'Centro de idiomas San Marcos',
    puesto: 'Java Developer',
    descripcion: 'Consumo de servicios APX para la comunicación con Despegar',
    tecnologia: 'Spring, RxJava, JBOSS, Jenkins, ASO, APX, SonarQube',
    anio: 2021
  },{
    centroTrabajo: 'Colegio Saco Oliveros',
    puesto: 'Java Developer',
    descripcion: 'Equipo Realavility Cotiza tipo de cambio',
    tecnologia: 'Spring, Drools, Kibana, SQL Server, Oracle',
    anio: 2021
  }];

  constructor() { }

  ngOnInit(): void {
  }

}


