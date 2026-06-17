import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCard {

  precioLibro = 45;
  cantidad = signal<number>(1);
  total = computed(() => this.cantidad() * this.precioLibro);

  agregar(){
    this.cantidad.update(cantidad => cantidad + 1)
  }

  quitar(){
    if(this.cantidad() > 1){
      this.cantidad.update(cantidad => cantidad - 1)
    }
  }


}
