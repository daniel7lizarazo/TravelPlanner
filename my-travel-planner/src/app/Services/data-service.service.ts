import { Injectable } from '@angular/core';
import { IPeople } from '../interfaces/IPeople';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private numberOfFriends = new Subject<number>();
  private friends : Array<IPeople> = [];

  $numberOfFriends = this.numberOfFriends.asObservable();

  addFriend(friend : IPeople) : void {
    this.friends.push(friend);
    this.numberOfFriends.next(this.friends?.length ?? 0);
    console.log(this.friends.length);
  }
}
