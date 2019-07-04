import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { selectNextLaunch, selectNextLaunchCountDown, selectLaunchDate } from './home.reducers';
import { getNextLaunch } from './home.actions';


export interface Launch {
  launch_date_unix: number;
  launch_date_utc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  nextLaunch$ = this._store.pipe(select(selectNextLaunch));
  nextLaunchCD$ = this._store.pipe(select(selectNextLaunchCountDown));
  nextLaunchDateUTC$ = this._store.pipe(select(selectLaunchDate));

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this._store.dispatch(new getNextLaunch());

  }

}
