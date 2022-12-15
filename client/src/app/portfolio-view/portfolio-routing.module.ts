import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: '', component: PortfolioComponent }
];

export const PortfolioRoutingModule = RouterModule.forChild(routes);