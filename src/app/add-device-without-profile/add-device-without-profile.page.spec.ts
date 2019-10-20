import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceWithoutProfilePage } from './add-device-without-profile.page';

describe('AddDeviceWithoutProfilePage', () => {
  let component: AddDeviceWithoutProfilePage;
  let fixture: ComponentFixture<AddDeviceWithoutProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceWithoutProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceWithoutProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
