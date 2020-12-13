import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import{About1Component} from './about1/about1.component';
import{About2Component} from './about2/about2.component'
import { UsersListComponent } from './users-list/users-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import  {CricketusersComponent} from './cricketusers/cricketusers.component';
import{CricketersprofileComponent} from './cricketersprofile/cricketersprofile.component'
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'user-list',component:UsersListComponent},
  {path:'user-list/:id',component:UserProfileComponent},
  {path:"cricketusers",component:CricketusersComponent},
  {path:"cricketusers/:id",component:CricketersprofileComponent},
  {path:"search",component:SearchComponent},

  

  { path: 'about', component: AboutComponent ,
 
    children:[
     {path:'',redirectTo:'about1',pathMatch:'full'},
      {path:'about1',component:About1Component},
      {path:'about2',component:About2Component},
      {path:'**', redirectTo:'about2'}
    ]

},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
