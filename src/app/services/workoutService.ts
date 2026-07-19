import { computed, Injectable, signal } from '@angular/core';

interface Workout {
  id: number;
  nombre: string;
  grupoMuscular: 'brazos' | 'piernas' | 'pecho' | 'espalda';
}


@Injectable({
  providedIn: 'root',
})
export class WorkoutService {

  private _workouts = signal([
    { id: 1, nombre: 'Flexiones', grupoMuscular: 'pecho' },
    { id: 2, nombre: 'Sentadillas', grupoMuscular: 'piernas' },
    { id: 3, nombre: 'Dominadas', grupoMuscular: 'espalda' },
    { id: 4, nombre: 'Curl de bíceps', grupoMuscular: 'brazos' },
    { id: 5, nombre: 'Press de banca', grupoMuscular: 'pecho' },
    { id: 6, nombre: 'Peso muerto', grupoMuscular: 'espalda' },
    { id: 7, nombre: 'Zancadas', grupoMuscular: 'piernas' },
    { id: 8, nombre: 'Fondos en paralelas', grupoMuscular: 'brazos' },
  ]);

  searchTerm = signal('');
  grupoMuscularFiltro = ['todos', 'brazos', 'piernas', 'pecho', 'espalda'] as const;
  grupoMuscularSeleccionado = signal<'todos' | 'brazos' | 'piernas' | 'pecho' | 'espalda'>('todos');

  ejerciciosFiltrados = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const grupo = this.grupoMuscularSeleccionado();

    return this._workouts().filter(workout => {
      const matchesTerm = workout.nombre.toLowerCase().includes(term);
      const matchesGroup = grupo === 'todos' || workout.grupoMuscular === grupo;
      return matchesTerm && matchesGroup;
    });
  })

  agregarEjercicio(nuevo: Workout) {
    this._workouts.update(lista => [...lista, nuevo]);
  }




}
