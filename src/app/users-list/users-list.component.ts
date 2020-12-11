import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
users=[
  {
    name:'xyz1',
    age:24,
    roll:145
  },
  {
    name:'xyz2',
    age:27,
    roll:146
  },
  {
    name:'xyz3',
    age:21,
    roll:147
  },
  {
    name:'xyz4',
    age:23,
    roll:148
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
