import { createReducer, on } from "@ngrx/store";
import { GlobalData, NewCoin, TopHundred } from "../interfaces";
import * as CryptoActions from './crypto.actions';

export interface State {
  globalData: GlobalData | null;
  topHundred: TopHundred[] | null;
  newCoins: NewCoin[] | null;
}

const initialState: State = {
  globalData: null,
  topHundred: null,
  newCoins: null
};


export const cryptoReducer = createReducer(
  initialState,

  on(CryptoActions.setGlobalData, (state, { payload }) => {
    return {
      ...state,
      globalData: payload
    };
  }),

  on(CryptoActions.setTopHundred, (state, { payload }) => {
    return {
      ...state,
      topHundred: payload
    };
  }),

  on(CryptoActions.setNewCoins, (state, { payload }) => {
    return {
      ...state,
      newCoins: payload
    };
  })
);