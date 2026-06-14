import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Componente {
  nombre: string;
  precio: number;
  enStock: boolean;
  esCompatible: boolean;
}

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProfileCard {

componentes: Componente[] = [
  { nombre: 'AMD Ryzen 7 5700X', precio: 175.50, enStock: true, esCompatible: true },
  { nombre: 'ASUS ROG STRIX B550-F', precio: 145.00, enStock: true, esCompatible: true },
  { nombre: 'Memoria RAM Corsair 32GB', precio: 85.00, enStock: false, esCompatible: true },
  { nombre: 'Motherboard Intel Z790', precio: 220.00, enStock: true, esCompatible: false }
];

  nombreUsuario = 'Isaac Meneses';
  avatarUrl = 'https://mangakaart.fandom.com/es/wiki/Kratos';
  saludar() {
    this.mostrarInfo = !this.mostrarInfo; // Cambia de true a false, y viceversa
  }
  mostrarInfo = true;
  habilidades: string[] = ['Angular', 'TypeScript', 'Tailwind CSS'];



  // transacciones = [
  //   { tipo: 'ingreso', descripcion: 'Trading XAU/USD', monto: 150.50, completado: true },
  //   { tipo: 'gasto', descripcion: 'Suscripción Cinex', monto: 12.00, completado: true },
  //   { tipo: 'gasto', descripcion: 'Servidores AWS', monto: 45.00, completado: false },
  //   { tipo: 'ingreso', descripcion: 'Pago Freelance', monto: 300.00, completado: true }
  // ];



}
