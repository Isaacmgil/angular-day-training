import { Injectable, signal, computed, effect } from '@angular/core';

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

  listaPeliculas = signal<Pelicula[]>(
    JSON.parse(localStorage.getItem('misPeliculas') ?? '[]')
  );

  totalPeliculas = computed(() => {
    return this.listaPeliculas().length;
  })

  peliculasVistas = computed(() => {
    const peliculaVista = this.listaPeliculas().filter((pelicula) => {
      return pelicula.vista === true;
    })
    return peliculaVista.length;
  });

  peliculasPendientes = computed(() => {
    const peliculaNoVista = this.listaPeliculas().filter((pelicula) => {
      return pelicula.vista === false;
    })
    return peliculaNoVista.length;
  })

  constructor() {
    effect(() => {
      // 1. Convertimos la lista de películas a texto (JSON)
      const listaEnTexto = JSON.stringify(this.listaPeliculas());

      // 2. Lo guardamos en el navegador bajo el nombre 'misPeliculas'
      localStorage.setItem('misPeliculas', listaEnTexto);
    });
  }

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
