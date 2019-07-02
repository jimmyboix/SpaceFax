import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';
import { getNextLaunch, getNextLaunchSuccess, EHomeActions, getNextLaunchFailure } from './home.actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { Launch } from './home.component';

@Injectable()
export class HomeEffects {

    @Effect()
    getNextLaunch$ = this.actions$.pipe(
        ofType<getNextLaunch>(EHomeActions.GET_NEXT_LAUNCH),
        switchMap(() => this.homeService.getNextLaunch()),
        map((nextLaunch: Launch) => {
            if (nextLaunch != null) {
                return new getNextLaunchSuccess(nextLaunch);
            } else {
                throw new Error('Data from API is null');
            }
        }),
        catchError((err: Error) => of(new getNextLaunchFailure(err)))
    );


    constructor(
        private homeService: HomeService,
        private actions$: Actions,
        private store: Store<IAppState>) { }

}

