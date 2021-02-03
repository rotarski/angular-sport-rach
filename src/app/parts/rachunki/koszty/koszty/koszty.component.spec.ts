import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosztyComponent } from './koszty.component';

describe('KosztyComponent', () => {
  let component: KosztyComponent;
  let fixture: ComponentFixture<KosztyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KosztyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KosztyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
