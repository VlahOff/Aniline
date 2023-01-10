import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromPortfolio from './portfolio.reducer';

const portfolioSelector = createFeatureSelector<fromPortfolio.State>('portfolio');

export const getAllCoins = createSelector(portfolioSelector, s => s.allCoinsList);

export const getAddModalStatus = createSelector(portfolioSelector, s => s.addModalShown);
