import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.name);
    this.router.navigate(['home']);
  }

}
