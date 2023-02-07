import { createReducer, on } from "@ngrx/store";
import { ChartData, DetailedCoinDataResponse, GlobalData, CoinsView, SearchResult } from "../interfaces";
import * as CryptoActions from './crypto.actions';

export interface State {
  globalData: GlobalData | null;
  topHundred: CoinsView[] | null;
  topThree: CoinsView[] | null;
  newCoins: CoinsView[] | null;
  coinDetails: DetailedCoinDataResponse | null;
  chartData: ChartData[] | null;
  chartPeriod: number;
  searchResults: SearchResult[];
}

const initialState: State = {
  globalData: null,
  topHundred: null,
  topThree: null,
  newCoins: null,
  coinDetails: null,
  chartData: null,
  chartPeriod: 1,
  searchResults: []
};


export const cryptoReducer = createReducer(
  initialState,

  on(CryptoActions.setGlobalData, (state, { payload }) => {
    return {
      ...state,
      globalData: payload
    };
  }),

  on(CryptoActions.setTopThree, (state, { payload }) => {
    return {
      ...state,
      topThree: payload
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
  }),

  on(CryptoActions.setCoinDetails, (state, { payload }) => {
    return {
      ...state,
      coinDetails: payload
    };
  }),

  on(CryptoActions.setChartData, (state, { payload }) => {
    return {
      ...state,
      chartData: payload
    };
  }),

  on(CryptoActions.setChartPeriod, (state, { payload }) => {
    return {
      ...state,
      chartPeriod: payload
    };
  }),

  on(CryptoActions.setSearchResults, (state, { payload }) => {
    return {
      ...state,
      searchResults: payload
    };
  })
);