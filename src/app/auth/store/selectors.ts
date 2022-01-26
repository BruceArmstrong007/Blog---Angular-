import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmitingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmiting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationError
);
