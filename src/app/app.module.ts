import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CricketusersComponent } from './cricketusers/cricketusers.component';
import { CricketersprofileComponent } from './cricketersprofile/cricketersprofile.component';
import { SearchComponent } from './search/search.component';
import{UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    UsersListComponent,
    UserProfileComponent,
    CricketusersComponent,
    CricketersprofileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
