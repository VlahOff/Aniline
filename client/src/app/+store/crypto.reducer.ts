import { createReducer, on } from "@ngrx/store";
import { GlobalData, GlobalDataResponse } from "../interfaces";
import * as CryptoActions from './crypto.actions';

export interface State {
  globalData: GlobalDataResponse | null;
}

const initialState: State = {
  globalData: null
};


export const cryptoReducer = createReducer(
  initialState,

  on(CryptoActions.getGlobalData, (state, { payload }) => {
    return {
      ...state,
      globalData: payload
    };
  })
);