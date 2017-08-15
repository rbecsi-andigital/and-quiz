import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class QuizService {

  questions = [
    {
      question: 'The point at which the level of profits or benefits gained is less than the amount of money or energy invested is called',
      options: ['Decoy effect', 'The law of diminishing returns', 'Conspicuous consumption', 'Ethical conundrum'],
      answer: 1
    }, {
      question: 'Perfect competition is characterized by such a large number of firms competing that no firm can alter the market production or price significantly. As a result, firms become price takers. What is the formula characterizing the optimal long-run price level for firms in perfect competition?',
      options: ['Price = Marginal Cost', 'Price = 2 (Marginal Cost)', 'Price = 1/2 (Marginal Cost)', 'Price = (Marginal Cost) ^ 2'],
      answer: 0
    }, {
      question: 'Are you mad?',
      options: ['yes', 'no'],
      answer: 0
    }, {
      question: 'Are you mad?',
      options: ['yes', 'no'],
      answer: 0
    }, {
      question: 'Are you mad?',
      options: ['yes', 'no'],
      answer: 0
    }, {
      question: 'Are you mad?',
      options: ['yes', 'no'],
      answer: 0
    }, {
      question: 'Are you mad?',
      options: ['yes', 'no'],
      answer: 0
    }];

  constructor(private storage: StorageService) {
    if (this.storage.get('game') === null) {
      this.storage.set('game', { step: 0, points: 0 });
    }
  }

  isLast() {
    return this.questions.length === this.getGame().step;
  }

  getGame() {
    return this.storage.get('game');
  }

  incrementStep() {
    const game = this.getGame();
    game.step++;
    this.storage.set('game', game);
  }

  incrementPoints() {
    const game = this.getGame();
    game.points++;
    this.storage.set('game', game);
  }

  getQuestion() {
    const step = this.getGame().step;
    return this.questions[step];
  }

  answer(option) {
    const answer = this.getQuestion().answer;

    if (answer === option) {
      this.incrementPoints();
    }
    this.incrementStep();
  }

}
