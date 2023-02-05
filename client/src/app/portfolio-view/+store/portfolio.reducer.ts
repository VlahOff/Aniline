import { createReducer, on } from "@ngrx/store";
import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import * as PortfolioActions from './portfolio.actions';

export interface State {
  allCoinsList: AllCoins[];
  addModalShown: boolean;
  editModalShown: boolean;
  transactions: TransactionDetailed[];
  valueToFilterCoinList: string;
  transactionIdForEdit: string;
}

const initialState: State = {
  allCoinsList: [],
  addModalShown: false,
  editModalShown: false,
  transactions: [],
  valueToFilterCoinList: '',
  transactionIdForEdit: '',
};

export const portfolioReducer = createReducer(
  initialState,

  // Toggles the modal for adding an transaction
  on(PortfolioActions.toggleAddModal, (state) => {
    return {
      ...state,
      addModalShown: !state.addModalShown
    };
  }),

  // Toggles the modal for editing an transaction
  on(PortfolioActions.toggleEditModal, (state) => {
    return {
      ...state,
      editModalShown: !state.editModalShown
    };
  }),

  // Hides the modals
  on(PortfolioActions.hideModals, (state) => {
    return {
      ...state,
      addModalShown: false,
      editModalShown: false
    };
  }),

  // Sets the list of coins
  on(PortfolioActions.setAllCoinsList, (state, { payload }) => {
    return {
      ...state,
      allCoinsList: payload
    };
  }),

  // Sets the transactions to the state
  on(PortfolioActions.setTransactions, (state, { payload }) => {
    return {
      ...state,
      transactions: payload
    };
  }),

  // Sets the user entered coin to the state so it can filter the results in the dropdown
  on(PortfolioActions.setCoinToFilterList, (state, { payload }) => {
    return {
      ...state,
      valueToFilterCoinList: payload
    };
  }),

  // Sets the ID of the selected transaction for editing
  on(PortfolioActions.setTransactionIdToEdit, (state, { payload }) => {
    return {
      ...state,
      transactionIdForEdit: payload
    };
  }),

  // Clears the ID of the previously selected transaction for editing
  on(PortfolioActions.clearTransactionIdForEdit, (state) => {
    return {
      ...state,
      transactionIdForEdit: ''
    };
  }),

  // This removes the transaction
  on(PortfolioActions.removeTransaction, (state, { payload }) => {
    const transactions = state.transactions.filter(t => {
      return t.transactionId !== payload;
    });

    return {
      ...state,
      transactions: transactions,
    };
  })
);