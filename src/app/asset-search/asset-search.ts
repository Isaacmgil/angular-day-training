import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Assets } from '../services/assets';

@Component({
  selector: 'app-asset-search',
  imports: [TitleCasePipe],
  templateUrl: './asset-search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetSearch {
  private assetService = inject(Assets);

  searchTerm = this.assetService.searchTerm;
  activosFiltrados = this.assetService.activosFiltrados;
  tiposFiltro = this.assetService.tiposFiltro;
  tipoSeleccionado = this.assetService.tipoSeleccionado;

agregarActivo(simbolo: string, tipo: string) {
  const tipoValido = tipo as 'ingreso' | 'gasto';

  this.assetService.agregarActivo({
    id: Date.now(),
    simbolo: simbolo,
    tipo: tipoValido
  });
}

}
