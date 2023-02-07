import { createAction, props } from "@ngrx/store";
import { ChartData, CoinsView, DetailedCoinDataResponse, GlobalData, SearchResult } from "../interfaces";

export const fetchGlobalData = createAction('[Crypto] Fetch Global Data');

export const setGlobalData = createAction(
  '[Crypto] Set Global Data',
  props<{
    payload: GlobalData;
  }>()
);

export const fetchTopThree = createAction('[Crypto] Fetch Top Three');

export const setTopThree = createAction(
  '[Crypto] Set Top Three',
  props<{ payload: CoinsView[]; }>()
);

export const fetchTopHundred = createAction('[Crypto] Fetch Top Hundred');

export const setTopHundred = createAction(
  '[Crypto] Set Top Hundred',
  props<{ payload: CoinsView[]; }>()
);

export const fetchNewCoins = createAction('[Crypto] Fetch New Coins');

export const setNewCoins = createAction(
  '[Crypto] Set New Coins',
  props<{ payload: CoinsView[]; }>()
);

export const fetchCoinDetails = createAction(
  '[Crypto] Fetch Coin Details',
  props<{ payload: string; }>()
);

export const setCoinDetails = createAction(
  '[Crypto] Set Coin Details',
  props<{ payload: DetailedCoinDataResponse | null; }>()
);

export const fetchChartData = createAction(
  '[Crypto] Fetch Chart Data',
  props<{ payload: { coinId: string, days: number; }; }>()
);

export const setChartData = createAction(
  '[Crypto] Set Chart Data',
  props<{ payload: ChartData[] | null; }>()
);

export const setChartPeriod = createAction(
  '[Crypto] Set Chart Period',
  props<{ payload: number; }>()
);

export const startSearch = createAction(
  '[Crypto] Start Search',
  props<{ payload: string; }>()
);

export const setSearchResults = createAction(
  '[Crypto] Set Search Results',
  props<{ payload: SearchResult[]; }>()
);

export const dummy = createAction('[Crypto] Dummy');