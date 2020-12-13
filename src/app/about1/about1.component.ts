import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.scss']
})
export class About1Component implements OnInit {
  users:any;

  constructor(private _people:UsersService) { }

  ngOnInit(): void {
    this._people.getAllUsers().subscribe((data)=>{
      this.users=data;
    })

  }

}
