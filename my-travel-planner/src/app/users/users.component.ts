import { Component } from '@angular/core';
import { enumCities } from '../Enums/enumCities';
import { IPeople } from '../interfaces/IPeople';
import { DataServiceService } from '../Services/data-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DataServiceService]
})
export class UsersComponent{

  constructor(private dataService : DataServiceService) {
  }

  users : Array<IPeople> = [
    {
      name: 'Daniel',
      DOB: new Date(1997, 2, 7),
      email: 'daniel@mail.com',
      profilePicture: 'assets/img/danielProfilePic.png',
      city: enumCities.Bucaramanga
    },
    {
      name: 'Ayde',
      DOB: new Date(1999, 9, 29),
      email: '',
      profilePicture: 'assets/img/aydeProfilePic.png',
      city: enumCities.Cartagena
    },
    {
      name: 'Natalia',
      DOB: new Date(1995, 12, 25),
      email: 'nata@mail.com',
      profilePicture: 'assets/img/nataliaProfilePic.png',
      city: enumCities.Bogota
    },
    {
      name: 'Mono',
      DOB: new Date(1995, 12, 31),
      email: 'mono@mail.com',
      city: enumCities.Cali
    },
    {
      name: 'Danilo',
      DOB: new Date(1997, 2, 7),
      email: 'mono@mail.com',
      city: enumCities.Bucaramanga
    }
  ];

  addFriend(friendUser : IPeople){
    this.dataService.addFriend(friendUser);
  }
}
