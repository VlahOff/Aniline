import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import * as fromApp from './+store/app.reducer';
import { CryptoEffects } from './+store/crypto.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthEffects } from './auth/+store/auth.effects';
import { UserTokenInterceptor } from './auth/user-token.interceptor';
import { ConverterEffects } from './converter-view/+store/converter.effects';
import { CryptoCardComponent } from './home/crypto-card/crypto-card.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { PortfolioEffects } from './portfolio-view/+store/portfolio.effects';
import { specificModules } from './dev-tools';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CryptoCardComponent,
    HomeComponent,
    HeaderComponent,
    NotificationComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, CryptoEffects, ConverterEffects, PortfolioEffects]),
    ...specificModules
    // StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
