import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-asset-search',
  imports: [],
  templateUrl: './asset-search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetSearch {

  activos = signal([
  { id: 1, simbolo: 'BTC/USD' },
  { id: 2, simbolo: 'ETH/USD' },
  { id: 3, simbolo: 'XRP/USD' },
  { id: 4, simbolo: 'LTC/USD' },
  { id: 5, simbolo: 'BCH/USD' },
  { id: 6, simbolo: 'ADA/USD' },
]);

  searchTerm = signal('');

  activosFiltrados = computed(() => {
  const termino = this.searchTerm().toLowerCase();
  return this.activos().filter(activo =>
    activo.simbolo.toLowerCase().includes(termino)
  );
});




}
