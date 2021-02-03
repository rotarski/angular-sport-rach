import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrzychodyComponent } from './form-przychody.component';

describe('FormPrzychodyComponent', () => {
  let component: FormPrzychodyComponent;
  let fixture: ComponentFixture<FormPrzychodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPrzychodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrzychodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
