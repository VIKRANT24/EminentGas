import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceWOProfilePage } from './add-device-woprofile.page';

describe('AddDeviceWOProfilePage', () => {
  let component: AddDeviceWOProfilePage;
  let fixture: ComponentFixture<AddDeviceWOProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceWOProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceWOProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
