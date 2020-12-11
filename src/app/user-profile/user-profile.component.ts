import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUserId;
  currentUser;
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
      age:30,
      roll:148
    },
  ]

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router) {
    activatedRoute.params.subscribe((params)=>{
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

  hh(){
    this.router.navigate(['/about'])
    this.router
  }

}
