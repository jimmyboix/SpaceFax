import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { selectNextLaunch, selectNextLaunchCountDown, selectLaunchDate } from './home.reducers';
import { GetNextLaunch } from './home.actions';


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
  nextLaunch$ = this.store.pipe(select(selectNextLaunch));
  nextLaunchCD$ = this.store.pipe(select(selectNextLaunchCountDown));
  nextLaunchDateUTC$ = this.store.pipe(select(selectLaunchDate));

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetNextLaunch());

  }

}
