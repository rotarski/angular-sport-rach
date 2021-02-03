import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;
  loginForm: FormGroup;
  errorMessage = 'Błędne dane logowania';
  notLoading = true;

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder,
    private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(){ return this.loginForm.controls; }



  onSubmit(){
    if(this.loginForm.invalid){
      this.invalidLogin = true;
      return
    }
    this.notLoading = false;
   
    this.invalidLogin = false;
    this.authService.login({
      username: this.f.username.value,
      password: this.f.password.value
    }).pipe(first())
    .subscribe(
      data => {
        console.log(data);       
        this.router.navigate(['/user','klub','profil']);
      },
      err => {
        console.log(err);
        this.notLoading = true;
        this.invalidLogin = true;
      }
    );
  }

}
