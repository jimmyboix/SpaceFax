import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetPastLaunch } from './past.actions';
import { IAppState } from 'src/app/app.state';
import { selectPastLaunch } from './past.reducers';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {

  pastLaunches$ = this.store.pipe(select(selectPastLaunch));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetPastLaunch());
  }

}
