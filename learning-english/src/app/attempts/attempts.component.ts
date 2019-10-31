import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent implements OnInit {

  public fullHeart = 'assets/full_heart.png';
  public emptyHeart = 'assets/empty_heart.png';

  constructor() { }

  ngOnInit() {
  }

}
