import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKosztyComponent } from './form-koszty.component';

describe('FormKosztyComponent', () => {
  let component: FormKosztyComponent;
  let fixture: ComponentFixture<FormKosztyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKosztyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKosztyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
