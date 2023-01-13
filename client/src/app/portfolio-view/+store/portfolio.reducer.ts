import { createReducer, on } from "@ngrx/store";
import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import * as PortfolioActions from './portfolio.actions';

export interface State {
  allCoinsList: AllCoins[];
  addModalShown: boolean;
  selectedCoin: AllCoins | null;
  coinInputField: string;
  transactionsIds: string[];
  transactions: TransactionDetailed[];
}

const initialState: State = {
  allCoinsList: [],
  addModalShown: false,
  selectedCoin: null,
  coinInputField: '',
  transactionsIds: [],
  transactions: [],
};

export const portfolioReducer = createReducer(
  initialState,
  // Toggles the modal for adding an asset
  on(PortfolioActions.showAddModal, (state) => {
    return {
      ...state,
      addModalShown: !state.addModalShown
    };
  }),

  // Sets all the coins info in the add modal dropdown
  on(PortfolioActions.setAllCoinsList, (state, { payload }) => {
    return {
      ...state,
      allCoinsList: payload
    };
  }),

  // Sets the user entered coin to the state so it can filter the results in the dropdown
  on(PortfolioActions.setCoinInputField, (state, { payload }) => {
    return {
      ...state,
      coinInputField: payload
    };
  }),

  // When the transaction IDs are fetch this sets it to the state so that can be iterated over
  on(PortfolioActions.setTransactionsIds, (state, { payload }) => {
    return {
      ...state,
      transactionsIds: payload
    };
  }),

  on(PortfolioActions.addTransactionId, (state, { payload }) => {
    return {
      ...state,
      transactionsIds: [...state.transactionsIds, payload]
    };
  }),

  // After the detailed transaction is fetched this adds it to the state
  on(PortfolioActions.setTransaction, (state, { payload }) => {
    return {
      ...state,
      transactions: [...state.transactions, payload]
    };
  }),

  // This removes the transaction
  on(PortfolioActions.removeTransaction, (state, { payload }) => {
    const transactions = state.transactions.filter(t => {
      return t.transactionId !== payload;
    });
    const transactionsIds = state.transactionsIds.filter(t => {
      return t !== payload;
    });
    return {
      ...state,
      transactions: transactions,
      transactionsIds: transactionsIds
    };
  })
);