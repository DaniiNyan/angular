import { Component, OnInit } from '@angular/core';
import { SENTENCES_MOCK } from '../shared/sentences.mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public instruction = 'Traduza a frase:'
  public currentAnswer = '';
  public currentQuestion = SENTENCES_MOCK[0].english;

  constructor() { }

  ngOnInit() {
    console.log(SENTENCES_MOCK);
  }

  onUpdateAnswer(answer: string) {
    this.currentAnswer = answer;
    console.log(this.currentAnswer);
  }
}
