import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoinsComponent } from './coins/coins.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CryptoCardComponent } from './home/crypto-card/crypto-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoConverterComponent,
    PortfolioComponent,
    CoinsComponent,
    PageNotFoundComponent,
    CryptoCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
