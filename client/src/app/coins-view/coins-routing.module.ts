import { RouterModule, Routes } from "@angular/router";
import { CoinDetailsComponent } from "./coin-details/coin-details.component";
import { NewCoinsComponent } from "./new-coins/new-coins.component";
import { TopHundredComponent } from "./top-hundred/top-hundred.component";

const routes: Routes = [
  {
    path: '', children: [
      { path: 'top100', component: TopHundredComponent },
      { path: 'new-coins', component: NewCoinsComponent },
      { path: ':id', component: CoinDetailsComponent }
    ]
  }
];

export const CoinsRoutingModule = RouterModule.forChild(routes);