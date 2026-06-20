import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

interface Meta {
  id: number;
  descripcion: string;
  monto: number;
  lograda: boolean;
}

@Component({
  selector: 'app-money-goals',
  imports: [],
  templateUrl: './money-goals.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyGoals {

  metas = signal([
    { id: 1, descripcion: 'Viaje Margarita', monto: 1200, lograda: false },
    { id: 2, descripcion: 'Viaje Salto Angel', monto: 1200, lograda: false },
    { id: 3, descripcion: 'Auto Nuevo', monto: 5000, lograda: true },
    { id: 4, descripcion: 'Cuenta de inversion', monto: 5000, lograda: true },
  ])

  metasCompletadas = computed(() => {
    const listaMetas = this.metas();

    return listaMetas.filter(meta => meta.lograda === true).length;
  });

  marcarLograda(idMeta: number) {

    this.metas.update((listaActual) => {

      return listaActual.map((meta) => {
        if (meta.id === idMeta) {
          return { ...meta, lograda: true };

        } else {
          return meta;
        }

      });
    });
  }


}
