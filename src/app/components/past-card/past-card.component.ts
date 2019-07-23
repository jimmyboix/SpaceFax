import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-past-card',
  templateUrl: './past-card.component.html',
  styleUrls: ['./past-card.component.scss']
})
export class PastCardComponent implements OnInit {

  @Input()
  pastLaunch: any;
  @Input()
  cardId: number;

  constructor() { }

  ngOnInit() {
  }

}
