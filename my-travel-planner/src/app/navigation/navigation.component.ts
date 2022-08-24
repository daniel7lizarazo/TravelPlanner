import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [DataServiceService]
})
export class NavigationComponent implements OnDestroy {

  numberOfFriends : number = 0;
  subscription : Subscription;

  constructor(private dataService : DataServiceService) {
    this.subscription = this.dataService.$numberOfFriends.subscribe( _numberOfFriends => {
      this.numberOfFriends = _numberOfFriends;
      console.log(_numberOfFriends);
    })
   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
