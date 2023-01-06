import { createAction, props } from "@ngrx/store";
import { CryptoMap, FiatMap } from "src/app/interfaces";

export const fetchCryptoMap = createAction('[Converter] Fetch Crypto Map');

export const setCryptoMap = createAction(
  '[Converter] Set Crypto Map',
  props<{ payload: CryptoMap[]; }>()
);

export const fetchFiatMap = createAction('[Converter] Fetch Fiat Map');

export const setFiatMap = createAction(
  '[Converter] Set Fiat Map',
  props<{ payload: FiatMap[]; }>()
);

export const setFromId = createAction(
  '[Converter] Set From Id',
  props<{ payload: number; }>()
);

export const setToId = createAction(
  '[Converter] Set To Id',
  props<{ payload: number; }>()
);