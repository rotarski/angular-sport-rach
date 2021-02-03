import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrzychodyComponent } from './list-przychody.component';

describe('ListPrzychodyComponent', () => {
  let component: ListPrzychodyComponent;
  let fixture: ComponentFixture<ListPrzychodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrzychodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrzychodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
