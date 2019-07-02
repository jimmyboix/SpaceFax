import { Action } from '@ngrx/store';
import { Launch } from './home.component';

export enum EHomeActions {
    GET_NEXT_LAUNCH = '[Home] get next launch data',
    GET_NEXT_SUCCESS = '[Home] get next launch data success',
    GET_NEXT_FAILURE = '[Home] get next launch data failure'
}

export class getNextLaunch implements Action {
    public readonly type = EHomeActions.GET_NEXT_LAUNCH;
}

export class getNextLaunchSuccess implements Action {
    public readonly type = EHomeActions.GET_NEXT_SUCCESS;
    constructor(public payload: Launch) { }
}

export class getNextLaunchFailure implements Action {
    public readonly type = EHomeActions.GET_NEXT_FAILURE;
    constructor(public payload: Error) { }
}

export type HomeActions = getNextLaunch | getNextLaunchSuccess | getNextLaunchFailure;