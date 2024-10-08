import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public homePageTabIndex: EventEmitter<number>;

  constructor() {
    this.homePageTabIndex = new EventEmitter();
  }
}
