import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { PastService } from 'src/app/services/past.service';
import { EPastActions, GetPastLaunchSuccess, GetPastLaunchFailure, GetPastLaunch } from './past.actions';

@Injectable()
export class PastEffects {

    @Effect()
    getPastLaunch$ = this.actions$.pipe(
        ofType<GetPastLaunch>(EPastActions.GET_PAST_LAUNCH),
        switchMap(() => this.pastService.getPastLaunches()),
        map((pastLaunch: any) => {
            if (pastLaunch != null) {
                return new GetPastLaunchSuccess(pastLaunch);
            } else {
                throw new Error('Data from API is null');
            }
        }),
        catchError((err: Error) => of(new GetPastLaunchFailure(err)))
    );


    constructor(
        private pastService: PastService,
        private actions$: Actions,
        private store: Store<IAppState>) { }

}

