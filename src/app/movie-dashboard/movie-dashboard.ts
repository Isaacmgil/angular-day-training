import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-movie-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDashboard {

  moviesservice = inject(MoviesService);

  formularioMovie = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    genero: new FormControl('', [Validators.required, Validators.minLength(3)]),

  })

  buscadorControl = new FormControl('');

  guardarPelicula() {
    // Podemos preguntar si todo el formulario está correcto
    if (this.formularioMovie.valid) {
      const peliculaData = this.formularioMovie.value;

      this.moviesservice.agregarPelicula(peliculaData.titulo || '', peliculaData.genero || '')
    }

    // Borra todos los campos y reinicia las validaciones de golpe
    this.formularioMovie.reset();

  }

  textoBusqueda = signal('');

  constructor() {
    this.buscadorControl.valueChanges
      .pipe(
        debounceTime(600)
      )
      .subscribe((textoBuscado) => {
        this.textoBusqueda.set(textoBuscado?.toLowerCase() || '');
      });
  }

  peliculasFiltradas = computed(() => {
    return this.moviesservice.listaPeliculas().filter((pelicula) => {
      return pelicula.titulo.toLowerCase().includes(this.textoBusqueda())
    })
  })



}
