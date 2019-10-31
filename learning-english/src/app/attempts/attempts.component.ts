import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Attempt } from '../shared/attempt.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input()
  public remainingHearts: number;

  public attempts: Attempt[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.remainingHearts; i++) {
      this.attempts.push(new Attempt(true));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.remainingHearts.firstChange) {
      const index = this.attempts.length - changes.remainingHearts.currentValue;
      this.attempts[index - 1].isFull = false;
    } 
  }
}
