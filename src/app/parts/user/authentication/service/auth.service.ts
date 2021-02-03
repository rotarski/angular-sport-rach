import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../model/user.model';
import { AutoLogoutService } from './auto-logout.service';
import { TokenStorageService } from './token-storage.service';

const AUTH_URL = 'http://localhost:8080/user/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private isLoginSubject = new BehaviorSubject<boolean>(this.tokenStorageService.hasAuthenticated());
  IsLoginObservable = this.isLoginSubject.asObservable();
  autoLogOutsubscrption: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private autoLogoutService: AutoLogoutService) { }

  ngOnDestroy(): void {
    this.autoLogOutsubscrption.unsubscribe();
    console.log("destroy authservice");
  }

  register(user: User) {
    return this.http.post<User>(AUTH_URL + 'signup', user, httpOptions);
  }

  login(credentials: { username: string, password: string }) {
    return this.http.post<User>(AUTH_URL + 'signin',
      {
        username: credentials.username,
        password: credentials.password
      },
      httpOptions).pipe(
        tap((data) => {
          this.saveUser(data);
          this.isLoginSubject.next(true);
          this.startAutoLogout();
          return data;
        })
      );
  }

  logOut() {
    this.tokenStorageService.signOut();
    this.autoLogoutService.stopInterval();
    this.isLoginSubject.next(false);
    this.autoLogOutsubscrption.unsubscribe();

  }

  isAuthenticated(): boolean {
    return this.tokenStorageService.hasAuthenticated();
  }

  saveUser(user: User) {
    this.tokenStorageService.saveTokenAndUser(user);
    console.log("user is in storage");
    console.log(this.getUsername());
  }

  getUsername(): string {
    return this.tokenStorageService.getUsername();
  }


  startAutoLogout() {
    this.autoLogoutService.isAutoLogoutNext(false);
    this.autoLogoutService.initInterval();

    this.autoLogOutsubscrption = this.autoLogoutService.isAutoLogOutObservable.subscribe(data => {
      if (data) {
        console.log("logout - data from autologutservice" + data);
        this.logOut();
      }
    });
  }

}
