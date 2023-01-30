import { createReducer, on } from "@ngrx/store";
import { AllCoins, TransactionDetailed } from "src/app/interfaces";
import * as PortfolioActions from './portfolio.actions';

export interface State {
  allCoinsList: AllCoins[];
  addModalShown: boolean;
  editModalShown: boolean;
  selectedCoin: AllCoins | null;
  coinInputField: string;
  transactionsIds: string[];
  transactions: TransactionDetailed[];
  transactionForEdit: TransactionDetailed | null;
  transactionIdForEdit: string;
}

const initialState: State = {
  allCoinsList: [],
  addModalShown: false,
  editModalShown: false,
  selectedCoin: null,
  coinInputField: '',
  transactionsIds: [],
  transactions: [],
  transactionForEdit: null,
  transactionIdForEdit: ''
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

  // Toggles the modal for editing an asset
  on(PortfolioActions.showEditModal, (state) => {
    return {
      ...state,
      editModalShown: !state.editModalShown
    };
  }),

  // Toggles both modals to false
  on(PortfolioActions.hideModals, (state) => {
    return {
      ...state,
      addModalShown: false,
      editModalShown: false
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

  // When the transaction IDs are fetched this puts it in the state
  // so that can be iterated over and load all the details
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

  on(PortfolioActions.setTransactionIdForEditing, (state, { payload }) => {
    return {
      ...state,
      transactionIdForEdit: payload
    };
  }),

  on(PortfolioActions.setTransactionForEditing, (state, { payload }) => {
    return {
      ...state,
      transactionForEdit: payload
    };
  }),

  on(PortfolioActions.clearTransactionForEdit, (state) => {
    return {
      ...state,
      transactionForEdit: null,
      transactionIdForEdit: ''
    };
  }),

  on(PortfolioActions.updateEditedTransaction, (state, { payload }) => {
    let t = [...state.transactions];

    let index = t.findIndex(t => t.transactionId == payload.transactionId);
    t[index] = payload;

    return {
      ...state,
      transactions: [...t]
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