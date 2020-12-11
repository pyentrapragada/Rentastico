import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';

@Component({
  selector: 'app-cricketersprofile',
  templateUrl: './cricketersprofile.component.html',
  styleUrls: ['./cricketersprofile.component.scss']
})
export class CricketersprofileComponent implements OnInit {
  currentUserId;
  currentUser;
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

  

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router) {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params)
      
      this.currentUserId=params.id

      this.currentUser=this.users.find((x)=>{
        return x.roll==this.currentUserId
      })
      console.log(this.currentUser)
      
    })
   }

  ngOnInit(): void {
  }

}
