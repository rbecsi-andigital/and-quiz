import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;

  constructor(private storage: StorageService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.storage.get('user');
  }

  onStart() {
    this.router.navigate(['quiz']);
  }
}
