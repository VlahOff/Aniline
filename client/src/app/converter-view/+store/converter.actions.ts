import { createAction, props } from "@ngrx/store";
import { ConverterResponse, CryptoMap, FiatMap } from "src/app/interfaces";

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

export const setFrom = createAction(
  '[Converter] Set From',
  props<{ payload: CryptoMap | null; }>()
);

export const setTo = createAction(
  '[Converter] Set To',
  props<{ payload: FiatMap | null; }>()
);

export const setAmount = createAction(
  '[Converter] Set Amount',
  props<{ payload: number; }>()
);

export const convertCurrency = createAction(
  '[Converter] Convert Currency',
  props<{
    payload: {
      amount: number, from: CryptoMap | null, to: FiatMap | null;
    };
  }>()
);

export const setConvertResult = createAction(
  '[Converter] Set Converter Result',
  props<{ payload: ConverterResponse | null; }>()
);