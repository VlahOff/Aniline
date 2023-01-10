import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromConverter from '../+store/converter.reducer';

const converterSelector = createFeatureSelector<fromConverter.State>('converter');

export const getCryptoMap = createSelector(converterSelector, s => s.cryptoMap);

export const getFiatMap = createSelector(converterSelector, s => s.fiatMap);

export const getResult = createSelector(converterSelector, s => s.result);

export const getFrom = createSelector(converterSelector, s => s.from);

export const getTo = createSelector(converterSelector, s => s.to);