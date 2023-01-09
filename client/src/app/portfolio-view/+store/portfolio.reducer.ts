import { createReducer, on } from "@ngrx/store";
import * as PortfolioActions from './portfolio.actions';

export interface State {
  totalPortfolioValue: number;
  transactions: [];
  addModalShown: boolean;
}

const initialState: State = {
  totalPortfolioValue: 0,
  transactions: [],
  addModalShown: false
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