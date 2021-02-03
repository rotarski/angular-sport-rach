import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCzlonekComponent } from './edit-czlonek.component';

describe('EditCzlonekComponent', () => {
  let component: EditCzlonekComponent;
  let fixture: ComponentFixture<EditCzlonekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCzlonekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCzlonekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
