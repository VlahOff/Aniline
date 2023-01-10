import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCrypto from './crypto.reducer';

const cryptoSelector = createFeatureSelector<fromCrypto.State>('crypto');

export const getGlobalData = createSelector(cryptoSelector, s => s.globalData);

export const getTopHundred = createSelector(cryptoSelector, s => s.topHundred);

export const getNewCoins = createSelector(cryptoSelector, s => s.newCoins);

export const getTopThree = createSelector(cryptoSelector, s => s.topThree);