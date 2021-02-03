import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/utils/confirmation-dialog/confirmation-dialog.service';
import { Przychody } from '../../model/przychody.model';
import { PrzychodyService } from '../../services/przychody.service';

@Component({
  selector: 'app-list-przychody',
  templateUrl: './list-przychody.component.html',
  styleUrls: ['./list-przychody.component.css']
})
export class ListPrzychodyComponent implements OnInit {

  przychodyList: Przychody[];
  loading:boolean = true;

  page:number = 1;
  pageSize = 10;
  maxSize = 3;

  constructor(
    private przychodyService:PrzychodyService, 
    private router:Router,
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.loading = true;
    this.przychodyService.getHttpPrzychody().subscribe(przychody => {
      this.przychodyList = przychody;
      this.loading = false;
    });
  }

  onAddPrzychody(){
    this.router.navigate(['/user','klub','przychody','form']);
  }

  onDelete(id:number){
   this.openConfirmationDialog(id);
  }
  private openConfirmationDialog(id) {
    this.confirmationDialogService.confirm('Ostrzeżenie', 'Pozycja zostanie trwale usunięta, czy napewno usunąć?')
    .then((data) => {
      if(data){this.deletePrzychod(id);}
    })
    .catch(() => console.log('Anulowano usunięcie pozycji kosztów'));
  }

  private deletePrzychod(id:number){
    this.przychodyService.deleteHttpPrzychody(id).subscribe(res => {
      console.log("deleted przychod", res);
    });
  }
}
