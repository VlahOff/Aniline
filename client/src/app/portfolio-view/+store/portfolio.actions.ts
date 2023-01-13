import { createAction, props } from "@ngrx/store";
import { AllCoins, Transaction, TransactionDetailed } from "src/app/interfaces";

export const showAddModal = createAction('[Portfolio] Show Add Modal');

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

export const addTransaction = createAction(
  '[Portfolio] Add Transaction',
  props<{ payload: Transaction; }>()
);