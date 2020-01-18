import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceActivitySuperadminPage } from './device-activity-superadmin.page';

describe('DeviceActivitySuperadminPage', () => {
  let component: DeviceActivitySuperadminPage;
  let fixture: ComponentFixture<DeviceActivitySuperadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceActivitySuperadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceActivitySuperadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
