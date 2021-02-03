import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Podmiot } from '../../model/podmiot.model';
import { Przychod, Przychody } from '../../model/przychody.model';
import { PodmiotService } from '../../services/podmiot.service';
import { PrzychodyService } from '../../services/przychody.service';

@Component({
  selector: 'app-form-przychody',
  templateUrl: './form-przychody.component.html',
  styleUrls: ['./form-przychody.component.css']
})
export class FormPrzychodyComponent implements OnInit {

  options: Przychod[] = [Przychod.odplatne, Przychod.nieodplatne, Przychod.pozostale];

  editForm: FormGroup;
  message = '';
  podmioty: Podmiot[];
  model: any;
  loading:boolean = true;

  podmiot:Podmiot;
  

  constructor(
    private przychodyService: PrzychodyService,
    private fb: FormBuilder,
    private podmiotService: PodmiotService,
    private router:Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.initializeForm();
    this.setDateToForm();
    this.podmiotService.getHttpPodmioty().subscribe(podmioty => {
      this.podmioty =podmioty;
      this.loading = false;
    })
    if(this.podmiotService.podmiot){
      this.model = this.podmiotService.podmiot;
    }
  }


  onSubmit() {
    if (this.model && this.editForm.valid) {

      let zdarzenieToUpdate: Przychody = this.editForm.getRawValue();
      zdarzenieToUpdate.podmiot = this.model;

      this.przychodyService.saveHttpPrzychody(zdarzenieToUpdate)
        .subscribe((response: Response) => {
          if (response.status === 200) {
            this.message = "Zdarzenie zapisano";
            this.editForm.reset();
            this.setDateToForm();           
          } else {
            this.message = "Błąd zapisu";
          }
        });
    } else {
      if (!this.model) {
        this.message = "brak wybranego podmiotu";
      } else {
        this.message = "Uzupełnij dane";
      }
    }
  }

  setDateToForm() {
    this.editForm.controls['dataZdarzenia'].setValue(new Date().toISOString().substring(0, 10));
    this.editForm.controls['przychody'].setValue(Przychod.nieodplatne);
  }

  onClose() {
    this.podmiotService.podmiot = null;
    this.router.navigate(['/user','klub','przychody','list']);

  }

  get f() {
    return this.editForm.controls;
  }

  initializeForm() {
    this.editForm = this.fb.group({
      dataZdarzenia: [new Date(), Validators.required],
      nrDowoduKsiegowego: [''],
      opisZdarzenia: [''],
      kwota: ['', Validators.required],
      id: ['null'],
      przychody: ['', Validators.required]
    });
  }

  newPodmiot() {
    this.router.navigate(['/user','klub','przychody','podmiot']);
  }


  formatter = (podmiot: Podmiot) => (`${podmiot.nazwa} ${podmiot.adres.miejscowosc} ul.${podmiot.adres.ulica} NIP:${podmiot.nip}`);

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.podmioty.filter(p => {
      let text = p.nazwa + p.nip + p.adres.miejscowosc + p.adres.ulica
      return text.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    }).slice(0, 20)
    )
    // map(term => this.podmioty.filter(state => new RegExp(term, 'mi').test(state.nazwa)).slice(0, 10))
  );

}
