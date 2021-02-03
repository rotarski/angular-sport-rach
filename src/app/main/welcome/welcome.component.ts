import { Component, OnInit } from '@angular/core';
import { ItemContainer, ItemContainerService } from './item-container/item-container.service';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  items:ItemContainer[];
  editItem: number = -1;
  mains:ItemContainer[];
  editMain: number = -1;

  constructor(private welcomeService: WelcomeService) { }

  ngOnInit(): void {
    this.welcomeService.getHttpItems().subscribe(
      data => {
        this.items = data;
      }
    );
    this.welcomeService.getHttpMains().subscribe(
      data => {
        this.mains = data;
      }
    );

  }

  onEdit(index: number){
    this.editItem = index;
  }

  onEditMain(index: number){
    this.editMain = index;
  }
}
