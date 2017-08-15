import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user;

  constructor(private auth: AuthService, private storage: StorageService, private router: Router) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }
}
