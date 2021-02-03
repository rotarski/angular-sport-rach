import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRejestracjaComponent } from './edit-rejestracja.component';

describe('EditRejestracjaComponent', () => {
  let component: EditRejestracjaComponent;
  let fixture: ComponentFixture<EditRejestracjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRejestracjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRejestracjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
