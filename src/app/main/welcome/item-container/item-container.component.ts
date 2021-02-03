import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ItemContainer } from './item-container.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css'],

})
export class ItemContainerComponent implements OnInit {
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
