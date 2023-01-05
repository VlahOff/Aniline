import { createAction, props } from "@ngrx/store";
import { GlobalData, NewCoin, TopHundred } from "../interfaces";

export const fetchGlobalData = createAction('[Crypto] Fetch Global Data');

export const setGlobalData = createAction(
  '[Crypto] Set Global Data',
  props<{
    payload: GlobalData;
  }>()
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

export const dummy = createAction('[Crypto] Dummy');