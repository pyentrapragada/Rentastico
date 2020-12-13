import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users:any[];
  constructor(private _userservice:UsersService){

  }
  ngOnInit(){
    this.users=this._userservice.getAllUsers();
  }
}
