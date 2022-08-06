import { Component, OnInit, Input } from '@angular/core';
import { Experiencia } from '../models/experencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  @Input() entrada: boolean;

  experiencias: Experiencia[] = [{
    centroTrabajo: 'STEFANINI - LIMA - PERU (BBVA)',
    proyecto: 'Proyecto Single Sign On hacia Openpay desde Netcash Web BBVA',
    puesto: 'Analista Programador',
    descripcion: ['• Generación de servicios web basados en Java con Spring', '• Generación y análisis de scripts en tablas de Oracle',
      '• Migracion de Sql Server a Oracle', '• Consumo de servicios SSL y generacion de certificados en Java',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Angular,Lit Element, Cells (Framework Frontend BBVA), Css3, HTML5,
    Docker, Oracle, JPA, JSP, Cucumber, Jboss, Tomcat.`,
    anio: 2021
  }, {
    centroTrabajo: 'STEFANINI - LIMA - PERU (BBVA)',
    proyecto: 'Proyecto Onboarding Adquirencia BBVA Y EGLOBAL',
    puesto: 'Analista Programador',
    descripcion: ['• Generación de servicios web basados en Java con Spring', '• Generación y análisis de scripts en tablas de Oracle',
      '• Migracion de Sql Server a Oracle', '• Consumo de servicios SSL y generacion de certificados en Java',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Angular,Lit Element, Cells (Framework Frontend BBVA), Css3, HTML5,
    Docker, Oracle, JPA, JSP, Cucumber, Jboss, Tomcat.`,
    anio: 2021
  }, {
    centroTrabajo: 'STEFANINI - LIMA - PERU (BBVA)',
    proyecto: 'Seguros Rimac BBVA Y RIMAC',
    puesto: 'Analista Programador',
    descripcion: ['• Generación de servicios web basados en Java con Spring', '• Generación y análisis de scripts en tablas de Oracle',
      '• Migracion de Sql Server a Oracle', '• Consumo de servicios SSL y generacion de certificados en Java',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Angular,Lit Element, Cells (Framework Frontend BBVA), Css3, HTML5,
    Docker, Oracle, JPA, JSP, Cucumber, Jboss, Tomcat.`,
    anio: 2021
  }, {
    centroTrabajo: 'STEFANINI - LIMA - PERU (BBVA)',
    proyecto: 'Canjes de puntos BBVA Y DESPEGAR',
    puesto: 'Analista Programador',
    descripcion: ['• Generación de servicios web basados en Java con Spring', '• Generación y análisis de scripts en tablas de Oracle',
      '• Migracion de Sql Server a Oracle', '• Consumo de servicios SSL y generacion de certificados en Java',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Angular,Lit Element, Cells (Framework Frontend BBVA), Css3, HTML5,
    Docker, Oracle, JPA, JSP, Cucumber, Jboss, Tomcat.`,
    anio: 2021
  }, {
    centroTrabajo: 'EJERCITO DEL PERU ',
    proyecto: 'PROYECTO PMTD – LIMA - PERU ',
    puesto: 'Analista Programador Full Stack',
    descripcion: ['• Participacion en el modelamiento relacional de base de datos del negocio', '• Generacion de servicios Rest basados en Java y Spring Boot',
      '• Generacion de Authenticacion de usuarios basado en roles con Spring Security y jwt.', '• Generacion de documentacion de los servicios basado en Swagger',
      '• Generacion de componentes en Angular y servicios para el lado del front', '• Coordinaciones de los requisites funcionales y requerimientos del Cliente'],
    tecnologia: 'Java 8 (Servicios Rest, microservicios), Oracle, Angular 5,8 (Angular Material, Bootstrap), Tomcat (8,9), JavaScript, Css3 y HTML.',
    anio: 2021
  }, {
    centroTrabajo: 'INTEGRO S.A.C – LIMA - PERU',
    proyecto: 'PROYECTO NOVOFONG – LIMA - PERU ',
    puesto: 'Analista Programador',
    descripcion: ['• Generacion de componentes en Angular y servicios para el lado del front', '• Maquetacion de vistas front y estilos',
      '• Mantenimiento de sistemas front-end y mejoras a los estilos de angular Material',
      '• Mantenimiento a los servicios front', '• Ajustes en servicios de back'],
    tecnologia: 'Java 8 (Servicios Rest, microservicios), Oracle, Angular 5,8 (Angular Material, Bootstrap), Tomcat (8,9), JavaScript, Css3 y HTML.',
    anio: 2020
  }, {
    centroTrabajo: 'Open TI S.A.C – LIMA - PERU',
    proyecto: 'PROYECTO CLINICA BRALLIN – LIMA - PERU ',
    puesto: 'Analista Programador Full Stack',
    descripcion: ['• Realizacion de aplicación desde angular desde cero', '• Generacion de components y modulos y routers para angular',
      '• Generacion de estilos y maquetacion de vistas html', '• Consumo de servicios backend en spring', '• Modificacion de servicios en spring'],
    tecnologia: 'Java 8 (Servicios Rest, microservicios), Oracle, Angular 5,8 (Angular Material, Bootstrap), Tomcat (8,9), JavaScript, Css3 y HTML.',
    anio: 2020
  }];

  constructor() { }

  ngOnInit(): void {
  }

}


