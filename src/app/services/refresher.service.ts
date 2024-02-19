import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefresherService {
  refresh(event: any) {
    setTimeout(() => {
      // TODO: API call here
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
