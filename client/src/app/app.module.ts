import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromApp from './+store/app.reducer';
import { CryptoEffects } from './+store/crypto.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthEffects } from './auth/+store/auth.effects';
import { UserTokenInterceptor } from './auth/user-token.interceptor';
import { ConverterEffects } from './converter-view/+store/converter.effects';
import { specificModules } from './dev-tools';
import { HeaderComponent } from './header/header.component';
import { CryptoCardComponent } from './home/crypto-card/crypto-card.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioEffects } from './portfolio-view/+store/portfolio.effects';
import { SearchComponent } from './search/search.component';
import { DropdownMenuDirective } from './shared/dropdown-menu.directive';
import { ErrorBannerComponent } from './shared/error-banner/error-banner.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CryptoCardComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, CryptoEffects, ConverterEffects, PortfolioEffects]),
    ...specificModules,
    LoadingSpinnerComponent,
    ErrorBannerComponent,
    DropdownMenuDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
