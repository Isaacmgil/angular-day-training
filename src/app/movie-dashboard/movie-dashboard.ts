import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-dashboard',
  imports: [],
  templateUrl: './movie-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDashboard {

  moviesservice = inject(MoviesService);


}
