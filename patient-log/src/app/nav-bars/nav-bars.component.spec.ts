import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBarComponent } from './nav-bars.component';

describe('SideNavBarsComponent', () => {
  let component: SideNavBarComponent;
  let fixture: ComponentFixture<SideNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavBarComponent]
    });
    fixture = TestBed.createComponent(SideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
