import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  game;
  src;
  time;

  constructor(private storage: StorageService) {
  }

  ngOnInit() {
    this.game = this.storage.get('game');
    this.src = `./assets/${this.game.points}.png`;
    this.time = this.storage.get('time') / 100;
  }

}
