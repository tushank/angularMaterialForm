import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountReactiveComponent } from './admin-account-reactive.component';

describe('AdminAccountReactiveComponent', () => {
  let component: AdminAccountReactiveComponent;
  let fixture: ComponentFixture<AdminAccountReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
