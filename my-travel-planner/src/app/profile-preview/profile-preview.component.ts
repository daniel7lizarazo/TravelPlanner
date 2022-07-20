import { Component, OnChanges, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { enumCities } from '../Enums/enumCities';
import { IPeople } from '../interfaces/IPeople';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})

export class ProfilePreviewComponent implements OnChanges{

  // register = {} as IPeople;

  register = {} as IPeople;
  validRegister : Boolean = false;

  @Input('register')
  set setRegister(register: IPeople){
    if(register){
      this.register = register;
      this.validRegister = !!register.name;
      console.log(`hay nombre? ${!!register.name}`);
      // this.validRegister = (!!this.register.email || !!this.register.name  || !!this.register.city || !!this.register.DOB);
      console.log('Changing?')

    }
  }

  myName : string = '';

  @Input('myName')
  set setName(name: string){
    this.myName = name;
  }

  @Output()
  emitClearForm = new EventEmitter<string>();

  otroNombre : string = '';


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

  ngOnChanges(changes: SimpleChanges): void {
    // this.validRegister = (!!this.register.email || !!this.register.name  || !!this.register.city || !!this.register.DOB);
    console.log(changes);
  }

  clearForm(){
    this.emitClearForm?.emit(`${this.register.name} was cleared`);

  }

}
