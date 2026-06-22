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

  activosDisponibles = signal<Activo[]>([
    { id: 5, simbolo: 'TSLA/USD', precio: 350 },
    { id: 6, simbolo: 'AAPL/USD', precio: 120 },
    { id: 7, simbolo: 'NVDA/USD', precio: 200 },
    { id: 8, simbolo: 'SMSUG/USD', precio: 500 },
  ])

  totalActivos = computed(() => this.watchlist().length);
  totalDisponibles = computed(() => this.activosDisponibles().length);

  dejarDeSeguir(activoRemovido: Activo) {
    this.watchlist.update((listaActual) => {
      return listaActual.filter(listaActualizada => listaActualizada.id !== activoRemovido.id)
    })

    this.activosDisponibles.update((listaActual) => {
      return [...listaActual, activoRemovido]
    })
  }

  agregarActivo(nuevoActivo: Activo) {
    this.activosDisponibles.update((listaActualizada) => {
      return listaActualizada.filter(activo => activo.id !== nuevoActivo.id)
    })

    this.watchlist.update((listaActual) => {
      return [...listaActual, nuevoActivo]
    })

  }


}
