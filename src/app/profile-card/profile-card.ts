import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

interface Libro {
  titulo: string;
  categoria: string;
}

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCard {

  inventario = [
    { titulo: "El Rey León", categoria: 'Fantasía' },
    { titulo: "Narnia", categoria: 'Fantasía' },
    { titulo: "El Señor de los Anillos", categoria: 'Ficción' },
    { titulo: "Hábitos Atómicos", categoria: 'Autoayuda' },

  ]

  filtroActivo = signal<string>('Todas');
  librosFiltrados = computed(() => {
    const filtroActual = this.filtroActivo();

    if (filtroActual === 'Todas') {
      return this.inventario;
    }
    return this.inventario.filter(libro => libro.categoria === filtroActual);
  });

  cambiarFiltro(nuevaCategoria: string) {
    this.filtroActivo.set(nuevaCategoria)
  }


}
