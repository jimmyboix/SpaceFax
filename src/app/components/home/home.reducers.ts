import { EHomeActions } from './home.actions';
import { HomeActions } from './home.actions';
import { IHomeState, initialHomeState } from './home.state';
import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { DatePipe } from '@angular/common';

export const homeReducers = (
    state = initialHomeState,
    action: HomeActions
): IHomeState => {
    switch (action.type) {
        case EHomeActions.GET_NEXT_SUCCESS: {
            return {
                ...state,
                nextLaunch: action.payload,
                nextLaunchCountdown: getLaunchCountDown(action.payload.launch_date_unix)
            };
        }
        case EHomeActions.GET_NEXT_FAILURE: {
            return {
                ...state,
                error: action.payload
            };
        }
        default:
            return state;
    }
};

export function getLaunchCountDown(launchDateUnix: number) {
    let launchCountdown = 0;

    if (launchDateUnix !== null) {
        const nextLaunchEpoch = launchDateUnix;
        const nowEpoch = Math.floor(Date.now() / 1000);
        launchCountdown = nextLaunchEpoch - nowEpoch;
    }
    return launchCountdown;
}

const selectHome = (state: IAppState) => state.home;

export const selectNextLaunch = createSelector(
    selectHome,
    (state: IHomeState) => state.nextLaunch
);

export const selectNextLaunchCountDown = createSelector(
    selectHome,
    (state: IHomeState) => state.nextLaunchCountdown
);

export const selectLaunchDate = createSelector(
    selectHome,
    (state: IHomeState) => {
        const date = new Date(state.nextLaunch.launch_date_utc);
        const dutc = new Date(
            date.getFullYear(), date.getMonth(), date.getDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        const dp = new DatePipe('en-US');
        return dp.transform(dutc, 'yyyy-MMM-dd HH:mm:ss');
    }
);
