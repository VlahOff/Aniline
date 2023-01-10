import { createReducer, on } from "@ngrx/store";
import { AllCoins } from "src/app/interfaces";
import * as PortfolioActions from './portfolio.actions';

export interface State {
  totalPortfolioValue: number;
  transactions: [];
  addModalShown: boolean;
  allCoinsList: AllCoins[];
}

const initialState: State = {
  totalPortfolioValue: 0,
  transactions: [],
  addModalShown: true,
  allCoinsList: []
};

export const portfolioReducer = createReducer(
  initialState,

  on(PortfolioActions.showAddModal, (state) => {
    return {
      ...state,
      addModalShown: !state.addModalShown
    };
  })
);