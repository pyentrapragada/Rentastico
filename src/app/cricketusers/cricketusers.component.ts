import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricketusers',
  templateUrl: './cricketusers.component.html',
  styleUrls: ['./cricketusers.component.scss']
})
export class CricketusersComponent implements OnInit {

  users=[
    {name:'praveen',
    age:28,
    roll:1
  },
    {name:'Hemanth',
    age:29,
    roll:2
  },
    {name:'vishesh',
    age:30,
    roll:3
  },
    {name:'Rajesh',
    age:31,
    roll:4
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
