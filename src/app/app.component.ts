import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard} from './profile-card/profile-card';
import { MoneyGoals } from './money-goals/money-goals';
import { TradingWatchlist } from './trading-watchlist/trading-watchlist';
import { BudgetDashboard } from './budget-dashboard/budget-dashboard';
import { TransactionHistory } from './transaction-history/transaction-history';
import { AssetSearch } from './asset-search/asset-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard, MoneyGoals, TradingWatchlist, BudgetDashboard, TransactionHistory, AssetSearch],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aday-training';
}
