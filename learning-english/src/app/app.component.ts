import { Component } from '@angular/core';
import { GameResult } from './shared/result.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  gameInProgress: boolean;
  gameResult: GameResult;

  constructor() {
    this.title = 'learning-english';
    this.gameInProgress = true;
  }

  onFinishGame(result: GameResult) {
    this.gameInProgress = false;
    this.gameResult = result;
  }

  resetGame() {
    this.gameInProgress = true;
    this.gameResult = null;
  }

  get isWin(): boolean {
    return this.gameResult === GameResult.WIN;
  }

  get isDefeat(): boolean {
    return this.gameResult === GameResult.DEFEAT;
  }
}
