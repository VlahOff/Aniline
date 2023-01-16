import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

const authSelector = createFeatureSelector<fromAuth.State>('auth');

export const getUser = createSelector(authSelector, s => s.user);

export const getToken = createSelector(authSelector, s => s.token);