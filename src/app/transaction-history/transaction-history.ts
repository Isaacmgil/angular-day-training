import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Movimiento {
  id: number;
  descripcion: string;
  tipo: 'ingreso' | 'gasto';
  monto: number;
}

@Component({
  selector: 'app-transaction-history',
  imports: [],
  templateUrl: './transaction-history.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionHistory {

  movimientos = signal<Movimiento[]>([
    { id: 1, descripcion: 'Salario', tipo: 'ingreso', monto: 3000 },
    { id: 2, descripcion: 'Alquiler', tipo: 'gasto', monto: 1000 },
    { id: 3, descripcion: 'Comida', tipo: 'gasto', monto: 500 },
    { id: 4, descripcion: 'Venta de coche', tipo: 'ingreso', monto: 2000 },
  ]);

  movimientoActual = this.movimientos();

  ingresosTotales = computed(() => {
    const soloIngresos = this.movimientos().filter(mov => mov.tipo === 'ingreso');
    return soloIngresos.reduce((acumulador, movimiento) => acumulador + movimiento.monto, 0);
  });


  gastosTotales = computed(() => {
    const soloGastos = this.movimientos().filter(mov => mov.tipo === 'gasto');
    return soloGastos.reduce((acumulador, movimiento) => acumulador + movimiento.monto, 0);
  })

  ordenActual = signal('recientes');

  cambiarOrden(nuevoOrden: string){
    this.ordenActual.set(nuevoOrden)
  }

  historialProcesado = computed(() => {
  const lista = this.movimientos();
  const orden = this.ordenActual();

  const listaCopiada = [...lista];

  if (orden === 'recientes') {
    return listaCopiada.sort((a, b) => b.id - a.id);
  } else {
    return listaCopiada.sort((a, b) => b.monto - a.monto);
  }
});
}
