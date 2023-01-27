import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AllCoins } from "src/app/interfaces";
import * as fromPortfolio from './portfolio.reducer';

const portfolioSelector = createFeatureSelector<fromPortfolio.State>('portfolio');

const allCoins = createSelector(portfolioSelector, s => s.allCoinsList);
export const getCoinInputField = createSelector(portfolioSelector, s => s.coinInputField);

export const getAllCoins = createSelector(
  allCoins,
  getCoinInputField,
  (allCoins: AllCoins[], coinInput: string) => {
    if (coinInput != '') {
      return allCoins
        .filter(v => {
          return (v.name.toUpperCase() && v.id.toUpperCase())
            .startsWith(coinInput.toUpperCase());
        });
    }

    return [];
  }
);

export const getAddModalStatus = createSelector(portfolioSelector, s => s.addModalShown);

export const getEditModalStatus = createSelector(portfolioSelector, s => s.editModalShown);

export const getTransactionsIds = createSelector(portfolioSelector, s => s.transactionsIds);

export const getTransactionIdForEdit = createSelector(portfolioSelector, s => s.transactionIdForEdit);

export const getTransactionForEdit = createSelector(portfolioSelector, s => s.transactionForEdit);

export const getTransaction = (id: string) =>
  createSelector(portfolioSelector, s => {
    return s.transactions.find(t => t.transactionId === id);
  });

export const getTotalAssetValue = createSelector(
  portfolioSelector,
  s => s.transactions.reduce((acc, value) => acc + value.value, 0));