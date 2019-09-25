import { Injectable } from "@angular/core";
import { Iuser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: Iuser;
  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      lastName: "Papa",
      firstName: "John"
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
