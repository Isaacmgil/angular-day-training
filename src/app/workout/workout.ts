import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { WorkoutService } from '../services/workoutService';

@Component({
  selector: 'app-workout',
  imports: [],
  templateUrl: './workout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Workout {
  private workoutService = inject(WorkoutService);

  //Para poder verificar cuando es el filtro seleccionado, vamos a crear un puente de datos entre el servicio y el componente
  filtroActual = this.workoutService.grupoMuscularSeleccionado;

  //Estos son los ejercicios filtrados que se van a mostrar en el HTML, y se actualizan automáticamente cuando cambia el filtro o el término de búsqueda
  ejerciciosVisibles = this.workoutService.ejerciciosFiltrados;


  cambiarFiltro(grupo: 'todos' | 'brazos' | 'piernas' | 'pecho' | 'espalda') {
    this.workoutService.grupoMuscularSeleccionado.set(grupo);
  }

  // 3. Puente de acción: Recibir datos para guardar
  guardarEjercicio(nombre: string, grupo: string) {
    // Por ahora solo lo imprimimos para confirmar que el HTML y el TS se comunican
    console.log('Guardando rutina:', nombre, 'para el grupo:', grupo);
    const grupoMuscularValido = grupo as 'brazos' | 'piernas' | 'pecho' | 'espalda';

    this.workoutService.agregarEjercicio({
      id: Date.now(),
      nombre: nombre,
      grupoMuscular: grupoMuscularValido
    });

  }


}
