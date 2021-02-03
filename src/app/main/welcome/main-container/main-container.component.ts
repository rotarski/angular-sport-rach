import { Component, Input, OnInit } from '@angular/core';
import { ItemContainer } from '../item-container/item-container.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  @Input() item: ItemContainer;
  @Input() edit: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  onEdit() {
    this.edit = !this.edit;
  }

}
