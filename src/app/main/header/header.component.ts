import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/parts/user/authentication/service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isLoggedIn:boolean;
  loginSubscription: Subscription;
  username:string = '';

  constructor(private authService: AuthService, private router: Router) { }
  


  ngOnInit(): void {
   this.isLoggedIn = this.authService.isAuthenticated();
   if(this.isLoggedIn){
    this.authService.startAutoLogout();
    this.username = this.authService.getUsername();
   }
   this.loginSubscription = this.authService.IsLoginObservable.subscribe(
     loggedIn => {
       this.isLoggedIn = loggedIn;
       if(this.isLoggedIn){      
         this.username = this.authService.getUsername();
       }else{
         this.username = '';
       }
     }
   );
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  

}
