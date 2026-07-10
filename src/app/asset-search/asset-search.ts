import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-asset-search',
  imports: [TitleCasePipe],
  templateUrl: './asset-search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetSearch {

  activos = signal([
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

  activosFiltrados = computed(() => {
    const termino = this.searchTerm().toLowerCase();
    return this.activos().filter(activo =>
      (activo.simbolo.toLowerCase().includes(termino)) && (this.tipoSeleccionado() === 'todos' || activo.tipo === this.tipoSeleccionado())
    );
  });






}
