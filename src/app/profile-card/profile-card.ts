import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCard {

  nombreUsuario = 'Isaac Meneses';
  avatarUrl = 'https://mangakaart.fandom.com/es/wiki/Kratos';
  saludar() {
    this.mostrarInfo = !this.mostrarInfo; // Cambia de true a false, y viceversa
  }
  mostrarInfo = true;
  habilidades: string[] = ['Angular', 'TypeScript', 'Tailwind CSS'];

  transacciones = [
    { tipo: 'ingreso', descripcion: 'Trading XAU/USD', monto: 150.50, completado: true },
    { tipo: 'gasto', descripcion: 'Suscripción Cinex', monto: 12.00, completado: true },
    { tipo: 'gasto', descripcion: 'Servidores AWS', monto: 45.00, completado: false },
    { tipo: 'ingreso', descripcion: 'Pago Freelance', monto: 300.00, completado: true }
  ];

}
