import { Component, OnInit } from '@angular/core';
import { KosztyService } from '../../rachunki/services/koszty.service';
import { PodmiotService } from '../../rachunki/services/podmiot.service';
import { PrzychodyService } from '../../rachunki/services/przychody.service';

@Component({
  selector: 'app-klub',
  templateUrl: './klub.component.html',
  styleUrls: ['./klub.component.css'],
  providers:[KosztyService, PodmiotService, PrzychodyService]
})
export class KlubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
