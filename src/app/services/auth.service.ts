import { EventEmitter, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

  user$;

  constructor(private storage: StorageService) {
    this.user$ = new EventEmitter();
  }

  isLoggedIn() {
    const user = this.storage.get('user');
    return user ? user : null;
  }

  login(name) {
    const user = { name: name };
    this.user$.emit(user);
    this.storage.set('user', user);
  }

  logout() {
    this.storage.clear();
  }

}
