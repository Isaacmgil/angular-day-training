import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Activo {
  id: number;
  simbolo: string;
  precio: number;
}


@Component({
  selector: 'app-trading-watchlist',
  imports: [],
  templateUrl: './trading-watchlist.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingWatchlist {

  watchlist = signal<Activo[]>([
    { id: 1, simbolo: 'XAU/USD', precio: 50 },
    { id: 2, simbolo: 'BTC/USDT', precio: 100 },
    { id: 3, simbolo: 'XAU/USDT', precio: 200 },
    { id: 4, simbolo: 'ETH/USD', precio: 400 },
  ]);

  totalActivos = computed(() => this.watchlist().length);

  dejarDeSeguir(idActivo: number) {
    this.watchlist.update((listaActual) => {
      return listaActual.filter(listaActualizada => listaActualizada.id !== idActivo)
    })
  }


}
