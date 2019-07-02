import { RouterReducerState } from '@ngrx/router-store';

import { IHomeState, initialHomeState } from './components/home/home.state';

export interface IAppState {
    router?: RouterReducerState;
    home: IHomeState;
}

export const initialAppState: IAppState = {
    home: initialHomeState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
