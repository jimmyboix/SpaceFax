import { EPastActions } from './past.actions';
import { PastActions } from './past.actions';
import { IPastState, initialPastState } from './past.state';
import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';

export function pastReducers(state: IPastState = initialPastState, action: PastActions):
    IPastState {
    switch (action.type) {
        case EPastActions.GET_PAST_SUCCESS: {
            return {
                ...state,
                pastLaunch: action.payload
            };
        }
        case EPastActions.GET_PAST_FAILURE: {
            return {
                ...state,
                error: action.payload
            };
        }
        default:
            return state;
    }
}

const selectPast = (state: IAppState) => state.past;

export const selectPastLaunch = createSelector(
    selectPast,
    (state: IPastState) => state.pastLaunch
);
