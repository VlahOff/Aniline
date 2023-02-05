import { createAction, props } from "@ngrx/store";
import { AllCoins, Transaction, TransactionDetailed } from "src/app/interfaces";


export const toggleAddModal = createAction(
  '[Portfolio] Toggle Add Modal');

export const toggleEditModal = createAction(
  '[Portfolio] Toggle Edit Modal');

export const hideModals = createAction(
  '[Portfolio] Hide Modals');

// Fetches the list of available coins to be added to the portfolio
export const fetchAllCoinsList = createAction(
  '[Portfolio] Fetch All Coins List');

// Sets the list of coins to the app state
export const setAllCoinsList = createAction(
  '[Portfolio] Set All Coins List',
  props<{ payload: AllCoins[]; }>()
);

// Gets the users stored transactions
export const fetchTransactions = createAction(
  '[Portfolio] Fetch Transactions');

// Sets the transactions to the app state
export const setTransactions = createAction(
  '[Portfolio] Set Transactions',
  props<{ payload: TransactionDetailed[]; }>()
);

// This value is added to the state so that can be used to filter for the desired coin
export const setCoinToFilterList = createAction(
  '[Portfolio] Set Coin To Filter List',
  props<{ payload: string; }>()
);

export const addTransaction = createAction(
  '[Portfolio] Add Transaction',
  props<{ payload: Transaction; }>()
);

export const setTransactionIdToEdit = createAction(
  '[Portfolio] Set Transaction ID To Edit',
  props<{ payload: string; }>()
);

export const sendUpdatedTransaction = createAction(
  '[Portfolio] Send Updated Transaction',
  props<{ payload: { transaction: Transaction, transactionId: string; }; }>()
);

export const clearTransactionIdForEdit = createAction(
  '[Portfolio] Clear Transaction ID For Edit'
);

export const removeTransaction = createAction(
  '[Portfolio] Remove Transaction',
  props<{ payload: string; }>()
);

export const dummy = createAction('[Portfolio] Dummy');