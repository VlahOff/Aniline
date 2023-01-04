import { ActionReducerMap } from "@ngrx/store";

import * as fromAuth from '../auth/+store/auth.reducer';
import * as fromCrypto from './crypto.reducer';

export interface AppState {
  auth: fromAuth.State,
  crypto: fromCrypto.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  crypto: fromCrypto.cryptoReducer
};