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

export const setFromString = createAction(
  '[Converter] Set From String',
  props<{ payload: string; }>()
);

export const setTo = createAction(
  '[Converter] Set To',
  props<{ payload: FiatMap | null; }>()
);

export const setToString = createAction(
  '[Converter] Set To String',
  props<{ payload: string; }>()
);

export const setAmount = createAction(
  '[Converter] Set Amount',
  props<{ payload: number; }>()
);

export const convertCurrency = createAction('[Converter] Convert Currency');

export const setConvertResult = createAction(
  '[Converter] Set Converter Result',
  props<{ payload: ConverterResponse | null; }>()
);