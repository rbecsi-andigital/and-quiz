import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';
import { setInterval } from 'timers';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question;
  src;
  game;
  interval;
  countdown = 20;
  timeLeft;
  timer = 0;

  constructor(private storage: StorageService, private quiz: QuizService, private router: Router) {
    this.timeLeft = this.countdown;
  }

  ngOnInit() {
    setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft < 0) {
        this.answer(null);
      }
    }, 1000);

    setInterval(() => {
      this.timer++;
    }, 10);

    return this.doStep();
  }

  answer(option) {
    this.quiz.answer(option);
    return this.doStep();
  }

  doStep() {
    if (this.quiz.isLast()) {
      this.storage.set('time', this.timer);
      this.router.navigate(['end']);
      return;
    }
    this.question = this.quiz.getQuestion();
    this.game = this.quiz.getGame();
    this.src = `./assets/${this.game.points}.png`;
    this.timeLeft = this.countdown;
    return true;
  }

}
