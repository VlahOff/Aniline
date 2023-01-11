import { createReducer, on } from "@ngrx/store";
import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import * as PortfolioActions from './portfolio.actions';

export interface State {
  totalPortfolioValue: number;
  transactionsIds: string[];
  transactions: TransactionDetailed[];
  addModalShown: boolean;
  allCoinsList: AllCoins[];
  allCoinsResult: AllCoins[];
  coinInputField: string;
}

const initialState: State = {
  totalPortfolioValue: 0,
  transactionsIds: [],
  transactions: [],
  addModalShown: false,
  allCoinsList: [],
  allCoinsResult: [],
  coinInputField: ''
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
  })
);