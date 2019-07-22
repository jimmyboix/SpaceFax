import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-past-card',
  templateUrl: './past-card.component.html',
  styleUrls: ['./past-card.component.scss']
})
export class PastCardComponent implements OnInit {

  @Input()
  pastLaunch: object;
  @Input()
  cardId: number;

  constructor() { }

  ngOnInit() {
  }

}
