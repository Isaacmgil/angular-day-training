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
  saludar(){
    alert(`Hola, ${this.nombreUsuario}! Bienvenido a tu perfil.`);
  }

}
