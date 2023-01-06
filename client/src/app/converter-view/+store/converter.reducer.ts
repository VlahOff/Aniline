import { createReducer, on } from "@ngrx/store";

import { CryptoMap, FiatMap } from "src/app/interfaces";
import * as ConverterActions from './converter.actions';


export interface State {
  cryptoMap: CryptoMap[] | null;
  fiatMap: FiatMap[] | null;
  fromId: number | null;
  toId: number | null;
}

const initialState: State = {
  cryptoMap: null,
  fiatMap: null,
  fromId: null,
  toId: null
};

export const converterReducer = createReducer(
  initialState,

  on(ConverterActions.setCryptoMap, (state, { payload }) => {
    return {
      ...state,
      cryptoMap: payload
    };
  }),

  on(ConverterActions.setFiatMap, (state, { payload }) => {
    return {
      ...state,
      fiatMap: payload
    };
  }),

  on(ConverterActions.setFromId, (state, { payload }) => {
    return {
      ...state,
      fromId: payload
    };
  }),

  on(ConverterActions.setToId, (state, { payload }) => {
    return {
      ...state,
      toId: payload
    };
  })
);