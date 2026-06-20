import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard} from './profile-card/profile-card';
import { MoneyGoals } from './money-goals/money-goals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard, MoneyGoals],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aday-training';
}
