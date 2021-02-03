import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Koszt, Koszty } from '../../model/koszty.model';
import { Podmiot } from '../../model/podmiot.model';
import { KosztyService } from '../../services/koszty.service';
import { PodmiotService } from '../../services/podmiot.service';




@Component({
  selector: 'app-form-koszty',
  templateUrl: './form-koszty.component.html',
  styleUrls: ['./form-koszty.component.css']
})
export class FormKosztyComponent implements OnInit {
  options: Koszt[] = [Koszt.kup, Koszt.knkup];

  editForm: FormGroup;
  message = '';
  podmioty: Podmiot[];
  model: any;
  loading:boolean = true;

  podmiot:Podmiot;
  

  constructor(
    private kosztyService: KosztyService,
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

      let zdarzenieToUpdate: Koszty = this.editForm.getRawValue();
      zdarzenieToUpdate.podmiot = this.model;

      this.kosztyService.saveHttpKoszty(zdarzenieToUpdate)
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
    this.editForm.controls['koszty'].setValue(Koszt.kup);
  }

  onClose() {
    this.podmiotService.podmiot = null;
    this.router.navigate(['/user','klub','koszty','list']);
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
      koszty: ['', Validators.required]
    });
  }

  newPodmiot() {
    this.router.navigate(['/user','klub','koszty','podmiot']);
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
