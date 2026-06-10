import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard} from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aday-training';
}
