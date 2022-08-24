import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { DataServiceService } from './Services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfilePreviewComponent,
    NavigationComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent, NavigationComponent]
})
export class AppModule { }
