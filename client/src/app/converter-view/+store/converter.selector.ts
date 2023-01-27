import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CryptoMap, FiatMap } from "src/app/interfaces";
import * as fromConverter from '../+store/converter.reducer';

const converterSelector = createFeatureSelector<fromConverter.State>('converter');

const cryptoMap = createSelector(converterSelector, s => s.cryptoMap);
const fromString = createSelector(converterSelector, s => s.fromString);
export const getCryptoMap = createSelector(
  cryptoMap,
  fromString,
  (cryptoMap: CryptoMap[] | null, from: string) => {
    if (from !== '' && cryptoMap !== null) {
      return cryptoMap
        .filter(v => {
          return (v.name.toUpperCase() || v.symbol.toUpperCase())
            .startsWith(from.toUpperCase());
        });
    }

    return [];
  }
);

const fiatMap = createSelector(converterSelector, s => s.fiatMap);
const toString = createSelector(converterSelector, s => s.toString);
export const getFiatMap = createSelector(
  fiatMap,
  toString,
  (fiatMap: FiatMap[] | null, to: string) => {
    if (to !== '' && fiatMap !== null) {
      console.log('in');
      
      return fiatMap
        .filter(v => {
          return (v.name.toUpperCase() || v.symbol.toUpperCase())
            .includes(to.toUpperCase());
        });
    }

    return [];
  }
);

export const getResult = createSelector(converterSelector, s => s.result);

export const getFrom = createSelector(converterSelector, s => s.from);

export const getTo = createSelector(converterSelector, s => s.to);