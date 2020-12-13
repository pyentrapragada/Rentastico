import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  country='';
  popularity='';

  constructor(private _activatedroute:ActivatedRoute) {
    console.log(_activatedroute);//snapshot query params
    this._activatedroute.queryParams.subscribe((data)=>{
      console.log(data);
      //data is object
      this.country=data.country;
      this.popularity=data.popularity;
    })
   
   }
  
   

  ngOnInit(): void {
  }

}
