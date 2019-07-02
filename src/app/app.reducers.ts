import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from './app.state';
import { homeReducers } from './components/home/home.reducers';
import { Action } from 'rxjs/internal/scheduler/Action';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    home: homeReducers
};
