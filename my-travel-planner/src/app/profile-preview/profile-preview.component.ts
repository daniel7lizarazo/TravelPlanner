import { Component, Input, Output, EventEmitter} from '@angular/core';
import { enumCities } from '../Enums/enumCities';
import { IPeople } from '../interfaces/IPeople';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})

export class ProfilePreviewComponent{

  @Input()
  setUser! : IPeople;

  @Output()
  addFriend = new EventEmitter<IPeople>();

  addNewFriend(){
    this.addFriend.emit(this.setUser);
  }
}
