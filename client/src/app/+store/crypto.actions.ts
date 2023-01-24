import { createAction, props } from "@ngrx/store";
import { ChartData, DetailedCoinDataResponse, GlobalData, NewCoin, TopHundred } from "../interfaces";

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
  props<{ payload: TopHundred[]; }>()
);

export const fetchTopHundred = createAction('[Crypto] Fetch Top Hundred');

export const setTopHundred = createAction(
  '[Crypto] Set Top Hundred',
  props<{ payload: TopHundred[]; }>()
);

export const fetchNewCoins = createAction('[Crypto] Fetch New Coins');

export const setNewCoins = createAction(
  '[Crypto] Set New Coins',
  props<{ payload: NewCoin[]; }>()
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

export const dummy = createAction('[Crypto] Dummy');