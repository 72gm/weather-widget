import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../shared/animations/animations';

@Component({
  templateUrl: './about.component.html',
  animations: [pageTransition]
})
export class AboutComponent implements OnInit {
  state = 'in';

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

  constructor() {
  }
}