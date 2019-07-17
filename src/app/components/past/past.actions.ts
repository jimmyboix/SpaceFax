import { Action } from '@ngrx/store';

export enum EPastActions {
    GET_PAST_LAUNCH = '[Past] get Past launch data',
    GET_PAST_SUCCESS = '[Past] get Past launch data success',
    GET_PAST_FAILURE = '[Past] get Past launch data failure'
}

export class GetPastLaunch implements Action {
    public readonly type = EPastActions.GET_PAST_LAUNCH;
}

export class GetPastLaunchSuccess implements Action {
    public readonly type = EPastActions.GET_PAST_SUCCESS;
    constructor(public payload: any) { }
}

export class GetPastLaunchFailure implements Action {
    public readonly type = EPastActions.GET_PAST_FAILURE;
    constructor(public payload: Error) { }
}

export type PastActions = GetPastLaunch | GetPastLaunchSuccess | GetPastLaunchFailure;
