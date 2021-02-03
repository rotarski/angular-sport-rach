import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKlubComponent } from './edit-klub.component';

describe('EditKlubComponent', () => {
  let component: EditKlubComponent;
  let fixture: ComponentFixture<EditKlubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKlubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKlubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
