import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SENTENCES_MOCK } from '../shared/sentences.mock';
import { Sentence } from '../shared/sentence.model';
import { Attempt } from '../shared/attempt.model';
import { GameResult } from '../shared/result.enum';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public instruction = 'Traduza a frase:'
  public currentAnswer = '';
  public remainingHearts = 3;
  private round = 0;

  @Output()
  finishGame = new EventEmitter<GameResult>();

  constructor() { }

  ngOnInit() {
  }

  onUpdateAnswer(answer: string) {
    this.currentAnswer = answer;
  }

  validateAnswer() {
    if (this.currentAnswer === this.currentQuestion.portuguese) {
      this.currentAnswer = '';
      this.round++;

      if(this.round === SENTENCES_MOCK.length) {
        this.finishGame.emit(GameResult.WIN);
      }

    } else {
      this.remainingHearts--;
      if (this.remainingHearts === -1) {
        this.finishGame.emit(GameResult.DEFEAT);
      }
    }
  }

  get currentQuestion() {
    return SENTENCES_MOCK[this.round];
  }

  get progress() {
    return (this.round * 100) / SENTENCES_MOCK.length;
  }
}
