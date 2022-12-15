import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './coins-view/coins/coins.component';
import { CryptoConverterComponent } from './crypto-converter-view/crypto-converter/crypto-converter.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio-view/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'coins', loadChildren: () => import('./coins-view/coins-view.module').then(m => m.CoinsViewModule) },
  { path: 'converter', loadChildren: () => import('./crypto-converter-view/crypto-converter-view.module').then(m => m.CryptoConverterViewModule) },
  { path: 'portfolio', loadChildren: () => import('./portfolio-view/portfolio-view.module').then(m => m.PortfolioViewModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
