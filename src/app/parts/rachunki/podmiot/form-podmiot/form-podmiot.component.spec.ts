import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPodmiotComponent } from './form-podmiot.component';

describe('FormPodmiotComponent', () => {
  let component: FormPodmiotComponent;
  let fixture: ComponentFixture<FormPodmiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPodmiotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPodmiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
