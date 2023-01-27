import { createReducer, on } from "@ngrx/store";

import { ConverterResponse, CryptoMap, FiatMap } from "src/app/interfaces";
import * as ConverterActions from './converter.actions';


export interface State {
  cryptoMap: CryptoMap[] | null;
  fiatMap: FiatMap[] | null;
  amount: number;
  from: CryptoMap | null;
  fromString: string;
  to: FiatMap | null;
  toString: string;
  result: ConverterResponse | null;
}

const initialState: Readonly<State> = {
  cryptoMap: null,
  fiatMap: null,
  amount: 0,
  from: null,
  fromString: '',
  to: null,
  toString: '',
  result: null
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

  on(ConverterActions.setFrom, (state, { payload }) => {
    return {
      ...state,
      from: payload
    };
  }),

  on(ConverterActions.setFromString, (state, { payload }) => {
    return {
      ...state,
      fromString: payload
    };
  }),

  on(ConverterActions.setTo, (state, { payload }) => {
    return {
      ...state,
      to: payload
    };
  }),

  on(ConverterActions.setToString, (state, { payload }) => {
    return {
      ...state,
      toString: payload
    };
  }),

  on(ConverterActions.setAmount, (state, { payload }) => {
    return {
      ...state,
      amount: payload
    };
  }),

  on(ConverterActions.setConvertResult, (state, { payload }) => {
    return {
      ...state,
      result: payload
    };
  })
);