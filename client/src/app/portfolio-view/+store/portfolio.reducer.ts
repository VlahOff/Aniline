import { createReducer, on } from "@ngrx/store";
import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import * as PortfolioActions from './portfolio.actions';

export interface State {
  totalPortfolioValue: number;
  transactionsIds: string[];
  transactions: TransactionDetailed[];
  addModalShown: boolean;
  allCoinsList: AllCoins[];
  coinInputField: string;
  selectedCoin: AllCoins | null;
}

const initialState: State = {
  totalPortfolioValue: 0,
  transactionsIds: [],
  transactions: [],
  addModalShown: false,
  allCoinsList: [],
  coinInputField: '',
  selectedCoin: null
};

export const portfolioReducer = createReducer(
  initialState,

  on(PortfolioActions.showAddModal, (state) => {
    return {
      ...state,
      addModalShown: !state.addModalShown
    };
  }),

  on(PortfolioActions.setAllCoinsList, (state, { payload }) => {
    return {
      ...state,
      allCoinsList: payload
    };
  }),

  on(PortfolioActions.setCoinInputField, (state, { payload }) => {
    return {
      ...state,
      coinInputField: payload
    };
  }),

  on(PortfolioActions.setTransactionsIds, (state, { payload }) => {
    return {
      ...state,
      transactionsIds: payload
    };
  }),

  on(PortfolioActions.setTransaction, (state, { payload }) => {
    return {
      ...state,
      transactions: [...state.transactions, payload]
    };
  })
);