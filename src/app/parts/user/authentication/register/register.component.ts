import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../model/user.model';
import { AuthService } from '../service/auth.service';

export const checkPasswordsValidator:ValidatorFn = (control: FormGroup):ValidationErrors |null =>{
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password && confirmPassword && (password.value !== confirmPassword.value)? {checkPasswords: true}:null;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  submited = false; 
  errorMessages: string[] = [];
  

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(20)]]
    },{validator: checkPasswordsValidator});

  }
// for checking conform password


  get f(){ return this.userForm.controls; }

  onSubmit(){
    this.submited = true;
    if(this.userForm.invalid){
      this.submited = false;
      return;
    }

    this.loading = true;
    let user:User = {
      username: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value
    };

    this.authService.register(user).pipe(first()).subscribe(
      data => {
          console.log(data);
          this.router.navigate(['/login']);
      },
      err => {
          console.log(err);
          if(!!err.error.errors){
          this.errorMessages = err.error.errors;
          }else if(!!err.error.message){
            this.errorMessages = [err.error.message];
          }else{
            this.errorMessages = ["Błąd w rejestracji"];
          }
          this.loading = false;
          this.submited = false;

      }
    );

  }

}
