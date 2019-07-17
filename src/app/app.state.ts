import { RouterReducerState } from '@ngrx/router-store';

import { IHomeState, initialHomeState } from './components/home/home.state';
import { IPastState, initialPastState } from './components/past/past.state';

export interface IAppState {
    router?: RouterReducerState;
    home: IHomeState;
    past: IPastState;
}

export const initialAppState: IAppState = {
    home: initialHomeState,
    past: initialPastState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
