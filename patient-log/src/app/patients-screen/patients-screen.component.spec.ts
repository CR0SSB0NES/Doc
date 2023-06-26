import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsScreenComponent } from './patients-screen.component';

describe('PatientsScreenComponent', () => {
  let component: PatientsScreenComponent;
  let fixture: ComponentFixture<PatientsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsScreenComponent]
    });
    fixture = TestBed.createComponent(PatientsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
