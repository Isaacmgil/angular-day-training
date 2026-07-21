import { computed, Injectable, signal } from '@angular/core';

export interface Activo {
  id: number;
  simbolo: string;
  precio: number;
  tendencia: 'alcista' | 'bajista' | 'lateral';
}


@Injectable({
  providedIn: 'root',
})
export class TradingService {

  private _activos = signal<Activo[]>([
    { id: 1, simbolo: 'AAPL', precio: 150, tendencia: 'alcista' },
    { id: 2, simbolo: 'GOOGL', precio: 2800, tendencia: 'bajista' },
    { id: 3, simbolo: 'AMZN', precio: 3400, tendencia: 'lateral' },
    { id: 4, simbolo: 'MSFT', precio: 300, tendencia: 'alcista' },
    { id: 5, simbolo: 'TSLA', precio: 700, tendencia: 'bajista' },
  ])

    watchlist = signal<Activo[]>([
    { id: 1, simbolo: 'XAU/USD', precio: 50, tendencia: 'alcista' },
    { id: 2, simbolo: 'BTC/USDT', precio: 100, tendencia: 'bajista' },
    { id: 3, simbolo: 'XAU/USDT', precio: 200, tendencia: 'lateral' },
    { id: 4, simbolo: 'ETH/USD', precio: 400, tendencia: 'alcista' },
  ]);

  activosDisponibles = signal<Activo[]>([
    { id: 5, simbolo: 'TSLA/USD', precio: 350, tendencia: 'alcista' },
    { id: 6, simbolo: 'AAPL/USD', precio: 120, tendencia: 'lateral' },
    { id: 7, simbolo: 'NVDA/USD', precio: 200, tendencia: 'bajista' },
    { id: 8, simbolo: 'SMSUG/USD', precio: 500, tendencia: 'alcista' },
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

  activos = this._activos.asReadonly();

}
