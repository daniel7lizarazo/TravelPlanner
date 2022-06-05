import { Component } from '@angular/core';
import { enumCities } from './Enums/enumCities';
import { IPeople } from './interfaces/IPeople';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  register = {
    name: '',
    DOB: new Date(),
    email: '',
    city: ''
  }

  enumCities = enumCities;

  troop: Array<IPeople> = [
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

  cityClasses = (city : string) =>{
    return {
      'city__bucaramanga' : city === enumCities.Bucaramanga,
      'city__cartagena' : city === enumCities.Cartagena,
      'city__cali' : city === enumCities.Cali,
      'city__bogota' : city === enumCities.Bogota
    }

  };

  registerUser = () =>{
    this.troop.push(this.register);
  }
}
