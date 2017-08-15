import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate() {
    if (this.auth.isLoggedIn() !== null) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
