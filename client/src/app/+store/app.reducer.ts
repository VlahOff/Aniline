import { ActionReducerMap } from "@ngrx/store";

import * as fromAuth from '../auth/+store/auth.reducer';
import * as fromCrypto from './crypto.reducer';
import * as fromConverter from '../converter-view/+store/converter.reducer';
import * as fromPortfolio from '../portfolio-view/+store/portfolio.reducer';

export interface AppState {
  auth: fromAuth.State,
  crypto: fromCrypto.State,
  converter: fromConverter.State,
  portfolio: fromPortfolio.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  crypto: fromCrypto.cryptoReducer,
  converter: fromConverter.converterReducer,
  portfolio: fromPortfolio.portfolioReducer
};