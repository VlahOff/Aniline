import { createAction, props } from "@ngrx/store";
import { AllCoins } from "src/app/interfaces";

export const showAddModal = createAction('[Portfolio] Show Add Modal');

export const fetchAllCoinsList = createAction('[Portfolio] Fetch All Coins List');

export const setAllCoinsList = createAction(
  '[Portfolio] Set All Coins List',
  props<{ payload: AllCoins[]; }>()
);