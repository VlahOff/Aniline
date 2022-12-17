import { RouterModule, Routes } from "@angular/router";
import { NewCoinsComponent } from "./new-coins/new-coins.component";
import { TopHundredComponent } from "./top-hundred/top-hundred.component";

const routes: Routes = [
  {
    path: '', children: [
      { path: 'top100', component: TopHundredComponent },
      { path: 'new-coins', component: NewCoinsComponent }
    ]
  }
];

export const CoinsRoutingModule = RouterModule.forChild(routes);