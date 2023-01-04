import { createAction, props } from "@ngrx/store";

export const getGlobalData = createAction(
  '[Crypto] Get Global Data',
  props<{
    payload: {
      total_market_cap: number,
      market_cap_change_percentage_24h_usd: number,
      trading_volume: number,
      btc_dominance: number,
      number_of_coins: number;
    };
  }>()
);