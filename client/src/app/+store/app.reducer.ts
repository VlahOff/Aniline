import { ActionReducerMap } from "@ngrx/store";

import * as fromAuth from '../auth/+store/auth.reducer';
import * as fromConverter from '../converter-view/+store/converter.reducer';
import * as fromPortfolio from '../portfolio-view/+store/portfolio.reducer';
import * as fromAppState from './appState.reducer';
import * as fromCrypto from './crypto.reducer';

export interface AppState {
  appState: fromAppState.State,
  auth: fromAuth.State,
  crypto: fromCrypto.State,
  converter: fromConverter.State,
  portfolio: fromPortfolio.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  appState: fromAppState.appStateReducer,
  auth: fromAuth.authReducer,
  crypto: fromCrypto.cryptoReducer,
  converter: fromConverter.converterReducer,
  portfolio: fromPortfolio.portfolioReducer
};