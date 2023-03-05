import { Vista } from "./vista";

export class Proyecto {
    tipo: String;
    link: String;
    lengua: String;
    nombre: String;
    descripcion: String;
    imagen: String;
    tecnologias: Array<String>;
    vistas: Array<Vista>;
}

