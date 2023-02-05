import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import * as fromPortfolio from './portfolio.reducer';

const portfolioSelector = createFeatureSelector<fromPortfolio.State>('portfolio');

const allCoins = createSelector(portfolioSelector,
  s => s.allCoinsList);

const getFilterValue = createSelector(portfolioSelector,
  s => s.valueToFilterCoinList);

// Returns the coin list filtered by the users input
export const getAllCoins = createSelector(
  allCoins,
  getFilterValue,
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

export const getAddModalStatus = createSelector(portfolioSelector,
  s => s.addModalShown);

export const getEditModalStatus = createSelector(portfolioSelector,
  s => s.editModalShown);

export const getTransactions = createSelector(portfolioSelector,
  s => s.transactions);

const getTransactionIdForEdit = createSelector(portfolioSelector,
  s => s.transactionIdForEdit);

// Returns the selected transactions to edit
export const getTransactionToEdit = createSelector(
  getTransactions,
  getTransactionIdForEdit,
  (transactions: TransactionDetailed[], transactionId: string) => {
    return transactions.find(t => {
      return t.transactionId === transactionId;
    });
  }
);

// Calculates all the assets total current value and returns it
export const getTotalAssetValue = createSelector(
  portfolioSelector,
  s => s.transactions.reduce((acc, value) => acc + value.value, 0)
);