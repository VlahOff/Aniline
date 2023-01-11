import { createFeatureSelector, createSelector } from "@ngrx/store";
import { of } from "rxjs";
import { AllCoins } from "src/app/interfaces";
import * as fromPortfolio from './portfolio.reducer';

const portfolioSelector = createFeatureSelector<fromPortfolio.State>('portfolio');

export const getCoinInputField = createSelector(portfolioSelector, s => s.coinInputField);
const allCoins = createSelector(portfolioSelector, s => s.allCoinsList);

export const getAllCoins = createSelector(
  allCoins,
  getCoinInputField,
  (allCoins: AllCoins[], coinInput: string) => {
    if (coinInput != '') {
      return allCoins
        .filter(v => (v.name.toUpperCase() && v.id.toUpperCase())
          .startsWith(coinInput.toUpperCase()));
    }
    const t: AllCoins[] = [];
    return t;
  }
);

export const getAddModalStatus = createSelector(portfolioSelector, s => s.addModalShown);
