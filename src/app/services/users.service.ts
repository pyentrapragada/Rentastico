import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getAllUsers(){
    return [
      {name:'praveen',age:29 ,gender:'Male'},
      {name:'Moksha',age:1 ,gender:'Male'},
      {name:'Kishika',age:4,gender:'Feamle'},
      {name:'Sudeppa',age:30,gender:"Female"}
    ]
  }
}
