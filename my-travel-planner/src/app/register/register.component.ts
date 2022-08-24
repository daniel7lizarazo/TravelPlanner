import { Component, OnInit, Input } from '@angular/core';
import { IPeople } from '../interfaces/IPeople';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = {} as IPeople;

  littleMessage? : string;

  myName = this.register.name;

  ngOnInit(): void {
  }

  clearForm(emittedMessage : string){
    this.register = {} as IPeople;
    this.littleMessage = emittedMessage;
  }

  registerUser = () =>{
    // this.troop.push(this.register);
  }
}
