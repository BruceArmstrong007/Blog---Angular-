import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error Saving to Local Storage' + e);
    }
  }
  get(key: string): void {
    try {
      let val = localStorage.getItem(key);
      if (val != null) return JSON.parse(val);
      else console.log('No Data from Local Storage');
    } catch (e) {
      console.log('Error Getting Data from Local Storage' + e);
    }
  }
}
