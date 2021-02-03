import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Podmiot } from '../../model/podmiot.model';
import { PodmiotService } from '../../services/podmiot.service';

@Component({
  selector: 'app-form-podmiot',
  templateUrl: './form-podmiot.component.html',
  styleUrls: ['./form-podmiot.component.css']
})
export class FormPodmiotComponent implements OnInit {
 
  form: FormGroup;
  message:string = '';
  podmiot:Podmiot;
  
  constructor(
    private fb: FormBuilder, 
    private podmiotService:PodmiotService, 
    private router:Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.form = this.fb.group({
      id:['null'],
      nazwa:['',Validators.required],
      nip:[''],
      adres: this.fb.group({
        miejscowosc:['', Validators.required],
        ulica:[''],
        numer:[''],
        kod: ['', [Validators.required, Validators.pattern('[0-9]{5}$')]]
      })
    });
  }

  get f(){
    return this.form.controls;
  }

  get fa(){
    return (<FormGroup>this.form.controls.adres).controls;

  }

  onClose(){
    this.router.navigate(['../form'],{relativeTo:this.route});

  }

  onSubmit(){
    if(this.form.valid){
      let podmiot:Podmiot = this.form.getRawValue();
      this.podmiotService.saveHttpPodmiot(podmiot).subscribe(podmiot =>{
        this.message = 'podmiot zapisany';
      });
    }
  }
}
