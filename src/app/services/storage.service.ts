import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }

  get(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  clear() {
    return localStorage.clear();
  }

}
