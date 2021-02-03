import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKosztyComponent } from './list-koszty.component';

describe('ListKosztyComponent', () => {
  let component: ListKosztyComponent;
  let fixture: ComponentFixture<ListKosztyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKosztyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKosztyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
