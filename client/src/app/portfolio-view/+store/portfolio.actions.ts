import { createAction, props } from "@ngrx/store";
import { AllCoins, Transaction, TransactionDetailed } from "src/app/interfaces";

export const showAddModal = createAction('[Portfolio] Show Add Modal');

export const showEditModal = createAction('[Portfolio] Show Edit Modal');

export const hideModals = createAction('[Portfolio] Hide Modals');

export const fetchAllCoinsList = createAction('[Portfolio] Fetch All Coins List');

export const setAllCoinsList = createAction(
  '[Portfolio] Set All Coins List',
  props<{ payload: AllCoins[]; }>()
);

export const fetchTransactionsIds = createAction('[Portfolio] Fetch Transaction IDs');

export const setTransactionsIds = createAction(
  '[Portfolio] Set Transactions IDs',
  props<{ payload: string[]; }>()
);

export const setCoinInputField = createAction(
  '[Portfolio] Set Coin Input Field',
  props<{ payload: string; }>()
);

export const fetchTransaction = createAction(
  '[Portfolio] Fetch Transaction',
  props<{ payload: string; }>()
);

export const setTransaction = createAction(
  '[Portfolio] Set Transaction',
  props<{ payload: TransactionDetailed; }>()
);

export const addTransactionId = createAction(
  '[Portfolio] Add Transaction ID',
  props<{ payload: string; }>()
);

export const addTransaction = createAction(
  '[Portfolio] Add Transaction',
  props<{ payload: Transaction; }>()
);

export const fetchTransactionForEditing = createAction(
  '[Portfolio] Fetch Transaction For Editing',
  props<{ payload: string; }>()
);

export const setTransactionForEditing = createAction(
  '[Portfolio] Set Transaction For Editing',
  props<{ payload: TransactionDetailed; }>()
);

export const setTransactionIdForEditing = createAction(
  '[Portfolio] Set Transaction ID For Editing',
  props<{ payload: string; }>()
);

export const removeTransaction = createAction(
  '[Portfolio] Remove Transaction',
  props<{ payload: string; }>()
);

export const dummy = createAction('[Portfolio] Dummy');