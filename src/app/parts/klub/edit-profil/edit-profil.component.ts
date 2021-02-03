import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../../user/authentication/service/token-storage.service';
import { Czlonek } from '../model/czlonek.model';
import { Klub } from '../model/klub.model';
import { KlubService } from '../service/klub.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  klub: Klub;

  stateKlub: boolean= false;

  formKlub: FormGroup;

  constructor(private serviceKlub: KlubService, private fb: FormBuilder, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getKlubAndInitFormAndSetValue();
    
  }

  initForm(){
    this.formKlub = this.fb.group({
      id: [null],
      nazwa: ['', Validators.required],
      nip: ['', [Validators.pattern("[0-9]*"), Validators.required]],
      regon: ['', [Validators.pattern("[0-9]*"), Validators.required]],
      adres: this.fb.group({
        miejscowosc: ['', Validators.required],
        ulica: ['', Validators.required],
        numer: ['', Validators.required],
        kod: ['', [Validators.required, Validators.pattern("[0-9]{5}")]]
      }),
      rejestracja: this.fb.group({
        id: [null],
        nazwa: [''],
        numerIdentyfikacyjny: [''],
        adres: this.fb.group({
          miejscowosc: [''],
          ulica: [''],
          numer: [''],
          kod: ['']
        })
      }),
      nadzor: this.fb.group({
        id: [null],
        nazwa: [''],
        sklad: this.createSklad(this.klub.nadzor.sklad)
      }),
      zarzad: this.fb.group({
        id: [null],
        nazwa: [''],
        sklad: this.createSklad(this.klub.zarzad.sklad)
      })

    });
  }

  getKlubAndInitFormAndSetValue(){
    const klubId = this.tokenStorageService.getUser().klubId;
    if(klubId){
      this.serviceKlub.getHttpKlub(klubId).subscribe(klub =>{
        this.klub = klub;
        this.initForm();
        if (this.klub) {
          delete this.klub.version;
          this.formKlub.setValue(this.klub);
        }
        this.stateKlub = true;
      });
    }
  }

  saveKlub() {
    if (this.klub.id) {
      this.serviceKlub.updateHttpKlub(this.klub).subscribe(res => {
        console.log(res);
      });
    } else {
      this.serviceKlub.saveHttpKlub(this.klub).subscribe(
        res => {
          console.log(res);
        });
    }
  }


  onSubmit() {
    console.log("onSubmit");
    if (this.formKlub.valid) {
      this.klub = this.formKlub.getRawValue();
      this.saveKlub();
    }
  }

  createSklad(sklad: Czlonek[]) {
    let skladFormGroup = sklad.map(czlonek => this.createCzlonek());
    return this.fb.array(skladFormGroup);
  }

  createCzlonek() {
    return this.fb.group({
      id: [null],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      pesel: ['', Validators.required],
      funkcjaOrganu: ['', Validators.required]
    });
  }

  get zarzadSklad() {

    return (<FormArray>(this.formKlub.get('zarzad') as FormGroup).get('sklad')).controls;
  }

  get nadzorSklad() {

    return (<FormArray>(this.formKlub.get('nadzor') as FormGroup).get('sklad')).controls;;
  }

  deleteCzlonek(id: number) {
    this.serviceKlub.deleteHttpCzlonek(id).subscribe(
      res =>{
        this.getKlubAndInitFormAndSetValue();
      }
    );
  }

  addCzlonekNadzoru() {

  }

  addCzlonekZarzadu() {

  }
}
