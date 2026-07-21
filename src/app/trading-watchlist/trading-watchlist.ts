import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Activo, TradingService } from '../services/tradingService';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-trading-watchlist',
  imports: [CurrencyPipe],
  templateUrl: './trading-watchlist.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingWatchlist {

  tradingservice = inject(TradingService);
  activosDelMercado = this.tradingservice.activos;
  watchlist = this.tradingservice.watchlist;
  totalActivos = this.tradingservice.totalActivos;
  totalDisponibles = this.tradingservice.totalDisponibles;
  activosDisponibles = this.tradingservice.activosDisponibles;

  dejarDeSeguir(activo: Activo) {
    this.tradingservice.dejarDeSeguir(activo);
  }

  agregarActivo(activo: Activo) {
    this.tradingservice.agregarActivo(activo);
  }


}
