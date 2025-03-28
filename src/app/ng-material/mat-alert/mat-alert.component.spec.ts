import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAlertComponent } from './mat-alert.component';

describe('MatAlertComponent', () => {
  let component: MatAlertComponent;
  let fixture: ComponentFixture<MatAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatAlertComponent]
    });
    fixture = TestBed.createComponent(MatAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
