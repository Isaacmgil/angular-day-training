import { ChangeDetectionStrategy, Component } from '@angular/core';
import { signal } from '@angular/core';

interface Libro {
  titulo: string;
  autor: string;
  stock: number;
  precio: number;
  categoria: string;
}

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProfileCard {

  libros: Libro[] = [
    { titulo: 'El señor de los anillos', autor: 'Tolkien', stock: 20, precio: 80, categoria: 'Fantasía' },
    { titulo: 'Tiburon', autor: 'Spielberg', stock: 10, precio: 30, categoria: 'Ficcion' },
    { titulo: 'El tunel', autor: 'Ernesto Savato', stock: 8, precio: 25, categoria: 'Ficcion' },
    { titulo: 'Harry Potter', autor: 'J.K Rowling', stock: 35, precio: 40, categoria: 'Fantasía' },
  ];

  stockLibro = signal<number>(10);

  venderLibro(libro: Libro) {
    libro.stock = libro.stock - 1;
  }

  // nombreUsuario = 'Isaac Meneses';
  // avatarUrl = 'https://mangakaart.fandom.com/es/wiki/Kratos';
  // saludar() {
  //   this.mostrarInfo = !this.mostrarInfo; // Cambia de true a false, y viceversa
  // }
  // mostrarInfo = true;
  // habilidades: string[] = ['Angular', 'TypeScript', 'Tailwind CSS'];



  // transacciones = [
  //   { tipo: 'ingreso', descripcion: 'Trading XAU/USD', monto: 150.50, completado: true },
  //   { tipo: 'gasto', descripcion: 'Suscripción Cinex', monto: 12.00, completado: true },
  //   { tipo: 'gasto', descripcion: 'Servidores AWS', monto: 45.00, completado: false },
  //   { tipo: 'ingreso', descripcion: 'Pago Freelance', monto: 300.00, completado: true }
  // ];

  // componentes: Componente[] = [
  //   { nombre: 'AMD Ryzen 7 5700X', precio: 175.50, enStock: true, esCompatible: true },
  //   { nombre: 'ASUS ROG STRIX B550-F', precio: 145.00, enStock: true, esCompatible: true },
  //   { nombre: 'Memoria RAM Corsair 32GB', precio: 85.00, enStock: false, esCompatible: true },
  //   { nombre: 'Motherboard Intel Z790', precio: 220.00, enStock: true, esCompatible: false }
  // ];




}
