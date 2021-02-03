import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/utils/confirmation-dialog/confirmation-dialog.service';
import { Koszty } from '../../model/koszty.model';
import { KosztyService } from '../../services/koszty.service';

@Component({
  selector: 'app-list-koszty',
  templateUrl: './list-koszty.component.html',
  styleUrls: ['./list-koszty.component.css']
})
export class ListKosztyComponent implements OnInit {

  kosztyList: Koszty[];
  loading:boolean = true;

  page:number = 1;
  pageSize = 10;
  maxSize= 3;

  constructor(
    private kosztyService:KosztyService, 
    private router:Router,
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.loading = true;
    this.kosztyService.getHttpKoszty().subscribe(koszty => {
      this.kosztyList = koszty;
      this.loading = false;
    });
  }

  onAddKoszt(){
    this.router.navigate(['/user','klub','koszty','form']);
  }

  onDelete(id:number){
   this.openConfirmationDialog(id);
  }
  
  private openConfirmationDialog(id) {
    this.confirmationDialogService.confirm('Ostrzeżenie', 'Pozycja zostanie trwale usunięta, czy napewno usunąć?')
    .then((data) => {
      if(data){this.deleteKoszt(id);}
    })
    .catch(() => console.log('Anulowano usunięcie pozycji kosztów'));
  }

  private deleteKoszt(id:number){
    this.kosztyService.deleteHttpKoszt(id).subscribe(res => {
      console.log("deleted koszt", res);
    });
  }
}
