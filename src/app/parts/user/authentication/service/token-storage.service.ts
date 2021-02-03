import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

const TOKEN_KEY = 'auth-token';
const TOKEN_USER = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(){
    window.sessionStorage.clear();
  }

  saveTokenAndUser(jwtResponse: User){
    this.saveToken(jwtResponse);
    this.saveUser(jwtResponse);
  }

  saveUser(jwtResponse: User){
    window.sessionStorage.removeItem(TOKEN_USER);
    let user:User = {
      username:jwtResponse.username,
      email: jwtResponse.email,
      id: jwtResponse.id,
      roles: jwtResponse.roles,
      klubId: jwtResponse.klubId
    };
    window.sessionStorage.setItem(TOKEN_USER, JSON.stringify(user));
  }

  saveToken(jwtResponse: User){
    window.sessionStorage.removeItem(TOKEN_KEY);
    let jwtToken = jwtResponse.tokenType + ' ' + jwtResponse.accessToken;
    window.sessionStorage.setItem(TOKEN_KEY, jwtToken);
  }

  getToken():string{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  getUser():User{
    if(window.sessionStorage.getItem(TOKEN_USER)){

      return JSON.parse(window.sessionStorage.getItem(TOKEN_USER));
    }
      return null;
  }

  hasAuthenticated():boolean{
    return !!this.getUser() && !!this.getToken();
  }
  getUsername():string{
    if(this.hasAuthenticated){
      return this.getUser().username;
    }
    return null;
  }

}
