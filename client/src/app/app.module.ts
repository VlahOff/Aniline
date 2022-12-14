import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CoinsComponent } from './coins/coins.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CryptoCardComponent } from './home/crypto-card/crypto-card.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { UserTokenInterceptor } from './auth/user-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CryptoConverterComponent,
    PortfolioComponent,
    CoinsComponent,
    PageNotFoundComponent,
    CryptoCardComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
