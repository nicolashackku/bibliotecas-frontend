import { Libro } from "./Libro";

export interface Biblioteca {
  id: number;
  nombre: string;
  direccion: string;
  ciudad: string;
  libros: Libro[];
}

export interface BibliotecaNueva {
  nombre: string;
  direccion: string;
  ciudad: string;
}
