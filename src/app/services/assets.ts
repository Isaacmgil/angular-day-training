import { computed, Injectable, signal } from '@angular/core';

interface Activo {
  id: number;
  simbolo: string;
  tipo: 'ingreso' | 'gasto';
}

@Injectable({
  providedIn: 'root',
})
export class Assets {

  private _activos =  signal([
    { id: 1, simbolo: 'BTC/USD', tipo: 'ingreso' },
    { id: 2, simbolo: 'ETH/USD', tipo: 'ingreso' },
    { id: 3, simbolo: 'XRP/USD', tipo: 'gasto' },
    { id: 4, simbolo: 'LTC/USD', tipo: 'ingreso' },
    { id: 5, simbolo: 'BCH/USD', tipo: 'gasto' },
    { id: 6, simbolo: 'ADA/USD', tipo: 'gasto' },
  ]);

  searchTerm = signal('');
  tiposFiltro = ['todos', 'ingreso', 'gasto'] as const;
  tipoSeleccionado = signal<'todos' | 'ingreso' | 'gasto'>('todos');
  activos = this._activos.asReadonly();

  activosFiltrados = computed(() => {
    const termino = this.searchTerm().toLowerCase();
    return this._activos().filter(activo =>
      (activo.simbolo.toLowerCase().includes(termino)) && (this.tipoSeleccionado() === 'todos' || activo.tipo === this.tipoSeleccionado())
    );
  });

  agregarActivo(nuevo: Activo) {
  this._activos.update(lista => [...lista, nuevo]);
}

}
