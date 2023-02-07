import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCrypto from './crypto.reducer';

const cryptoSelector = createFeatureSelector<fromCrypto.State>('crypto');

export const getGlobalData = createSelector(cryptoSelector, s => s.globalData);

export const getTopHundred = createSelector(cryptoSelector, s => s.topHundred);

export const getNewCoins = createSelector(cryptoSelector, s => s.newCoins);

export const getTopThree = createSelector(cryptoSelector, s => s.topThree);

export const getCoinDetails = createSelector(cryptoSelector, s => s.coinDetails);

export const getCoinDetailsChart = createSelector(cryptoSelector, s => s.chartData);

export const getChartPeriod = createSelector(cryptoSelector, s => s.chartPeriod);

export const getSearchResults = createSelector(cryptoSelector, s => s.searchResults);