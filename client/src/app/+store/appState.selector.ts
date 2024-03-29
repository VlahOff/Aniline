import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAppState from './appState.reducer';

const appStateSelector = createFeatureSelector<fromAppState.State>('appState');

export const getLoadingStatus = createSelector(appStateSelector, s => s.loading);

export const getError = createSelector(appStateSelector, s => s.error);