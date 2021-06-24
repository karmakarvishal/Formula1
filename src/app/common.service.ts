import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  usersDB = [
    { userid: "abc@media.com", password: "abc123", "username": "Vishal Karmakar" },
    { userid: "def@media.com", password: "def123", "username": "dick" }
  ]
  constructor() { }



  authenticateUser(username, password) {
    console.log(this.usersDB.find(d => d.userid === username && d.password === password));
    let found = -1;
    this.usersDB.forEach((el, index) => {
      if (el.userid === username && el.password === password) {
        found = index + 1;
      }
    })

    return found > 0 ? true : false;

  }

  getUserDetails(userid) {
    return this.usersDB.find(d => d.userid === userid).username;
  }


}
