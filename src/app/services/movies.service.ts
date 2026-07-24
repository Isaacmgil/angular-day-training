import { Injectable, signal } from '@angular/core';

interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  vista: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  listaPeliculas = signal<Pelicula[]>([

  ]);

  agregarPelicula(tituloNuevo: string, generoNuevo: string) {
    this.listaPeliculas.update((listaActual) => {
      const nuevaPelicula: Pelicula = {
        id: Date.now(),
        titulo: tituloNuevo,
        genero: generoNuevo,
        vista: false
      };
      return [...listaActual, nuevaPelicula];
    });
  }

  eliminarPelicula(idAEliminar: number) {
    this.listaPeliculas.update((listaActual) => {
      return listaActual.filter((pelicula) => pelicula.id !== idAEliminar);
    });
  }

  marcarComoVista(id: number) {
    this.listaPeliculas.update((listaActual) => {

      return listaActual.map((pelicula) => {

        if (pelicula.id === id) {
          return { ...pelicula, vista: !pelicula.vista }
        } else {
          return pelicula;
        }
      });
    });
  }

}
