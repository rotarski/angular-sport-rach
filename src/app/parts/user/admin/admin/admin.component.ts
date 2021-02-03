import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ItemContainer } from 'src/app/main/welcome/item-container/item-container.service';
import { WelcomeService } from 'src/app/main/welcome/welcome.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items:ItemContainer[];
  // id of edited item , value == -1, means no item is edited
  id: number;

  mains:ItemContainer[];
  idMain: number;

  constructor(private welcomeService: WelcomeService, private router: Router) { }

  ngOnInit(): void {
    this.getHttpItems();
    this.id= -1;
    this.getHttpMains();
    this.idMain= -1;
  }

  edit(i){
    this.id = i;
  }

  editMain(i){
    this.idMain = i;
  }

  cancelEdit(){
    this.id = -1;

  }

  cancelEditMain(){
    this.idMain = -1;

  }

  deleteItem(id){
    console.log("delete "+id);
    this.welcomeService.deleteHttpItem(id).subscribe(() =>{
      this.getHttpItems();
    });
  }

  deleteMain(id){
    this.welcomeService.deleteHttpMain(id).subscribe(() =>{
      this.getHttpMains();
    });
  }
    saveItem(form:NgForm){
      let item: ItemContainer = {
        id: form.controls['id'].value,
        title: form.controls['title'].value,
        content: form.controls['content'].value,
        sortId: form.controls['sortId'].value
      };
      this.welcomeService.savetHttpItems(item).subscribe((data)=>{
        this.getHttpItems();
        if(item.id != null){
          this.cancelEdit();
        }
      });
      
    }

    saveMain(form:NgForm){
      console.log(form);
      let item: ItemContainer = {
        id: form.controls['id'].value,
        title: form.controls['title'].value,
        content: form.controls['content'].value,
        sortId: form.controls['sortId'].value
      };
      this.welcomeService.savetHttpMains(item).subscribe((data)=>{
        this.getHttpMains();
        if(item.id != null){
          this.cancelEditMain();
        }
      }); 
    }
    getHttpItems(){
      this.welcomeService.getHttpItemsAll().subscribe(
        data => {
          this.items = data;
        }
      );
    }
    getHttpMains(){
      this.welcomeService.getHttpMainsAll().subscribe(
        data => {
          this.mains = data;
        }
      );
    }

}
