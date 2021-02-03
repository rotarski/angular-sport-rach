import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, TimeInterval } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const MINUTES_UNITL_AUTO_LOGOUT = 5 // in mins
const CHECK_INTERVAL = 5000 // in ms
const STORE_KEY =  'lastAction';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService implements OnDestroy, OnInit{

  interval: any;
  num=0;

  private isAutoLogOutSubject = new BehaviorSubject<boolean>(false);
  isAutoLogOutObservable = this.isAutoLogOutSubject.asObservable();

  constructor(private router: Router, private tokenStorageService: TokenStorageService ) {
   
  }
  ngOnInit(): void {
    console.log("init autologout");
  }
  ngOnDestroy(): void {
    console.log("destroy autologout");
    this.stopInterval();
  }

 public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
 public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

 

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover',()=> this.reset());
    document.body.addEventListener('mouseout',() => this.reset());
    document.body.addEventListener('keydown',() => this.reset());
    document.body.addEventListener('keyup',() => this.reset());
    document.body.addEventListener('keypress',() => this.reset());
  
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    this.initListener();
    localStorage.setItem(STORE_KEY,Date.now().toString());
    this.interval = setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check():boolean {
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout)  {
      localStorage.clear();
      sessionStorage.clear();
      this.isAutoLogOutSubject.next(true);
      this.router.navigate(['/user','login']);
      return true;
    }
    return false;
  }

  stopInterval(){
    clearInterval(this.interval);
  }

  isAutoLogoutNext(value: boolean){
    this.isAutoLogOutSubject.next(value);
  }
}
