import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../../user/authentication/service/token-storage.service';
import { User } from '../../user/model/user.model';
import { Klub } from '../model/klub.model';
import { KlubService } from '../service/klub.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{

  results: Klub;
  addKlub: boolean = false;


  constructor(private klubService: KlubService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
   let user:User = this.tokenStorageService.getUser();
   let klubId: number = user.klubId;
   if(user && user.klubId){

     this.klubService.getHttpKlub(klubId).subscribe(res => {
       this.results = res;
     }, error => {
        this.addKlub = true;
     });
   }
  }

  deleteKlub(){
    if(this.results){
      this.klubService.deleteHttpKlub(this.results.id).subscribe(() =>{
        this.results = null;
      });
    }
  }

}
