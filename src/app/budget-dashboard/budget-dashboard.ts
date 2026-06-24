import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Gasto {
  id: number;
  descripcion: string;
  monto: number;
}

@Component({
  selector: 'app-budget-dashboard',
  imports: [],
  templateUrl: './budget-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetDashboard {

  presupuestoMensual = signal(2000);
  gastos = signal<Gasto[]>([
    { id: 1, descripcion: 'Alquiler', monto: 800 },
    { id: 2, descripcion: 'Comida', monto: 300 },
    { id: 3, descripcion: 'Transporte', monto: 150 },
  ]);

  totalGastado = computed(() => {
    return this.gastos().reduce((acumulador, gastoActual) => acumulador + gastoActual.monto, 0)
  });

  saldoRestante = computed(() => this.presupuestoMensual() - this.totalGastado())

  estadoPresupuesto = computed(() => {
    if (this.saldoRestante() > 0) {
      return 'Saludable'
    } else {
      return 'Excedido'
    }
  })

  eliminarGasto(idGasto: number) {
    this.gastos.update((gastoActualizado) => {
      return gastoActualizado.filter(gasto => gasto.id !== idGasto);
    })
  }

  aumentarPresupuesto(cantidad: number) {
    this.presupuestoMensual.update(presupuesto => presupuesto + cantidad)
  }
}
