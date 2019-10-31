import { Component, OnInit } from '@angular/core';
import { SENTENCES_MOCK } from '../shared/sentences.mock';
import { Sentence } from '../shared/sentence.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public instruction = 'Traduza a frase:'
  public currentAnswer = '';
  private round = 0;

  constructor() { }

  ngOnInit() {
    console.log(SENTENCES_MOCK);
  }

  onUpdateAnswer(answer: string) {
    this.currentAnswer = answer;
  }

  validateAnswer() {
    if (this.currentAnswer === this.currentQuestion.portuguese) {
      this.currentAnswer = '';
      this.round++;
    } else {
      alert('Errou');
    } 
  }

  get currentQuestion() {
    return SENTENCES_MOCK[this.round];
  }

  get progress() {
    return (this.round * 100) / SENTENCES_MOCK.length;
  }
}
