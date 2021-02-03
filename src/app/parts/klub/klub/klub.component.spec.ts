import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlubComponent } from './klub.component';

describe('KlubComponent', () => {
  let component: KlubComponent;
  let fixture: ComponentFixture<KlubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
