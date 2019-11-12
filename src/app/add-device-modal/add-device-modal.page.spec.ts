import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceModalPage } from './add-device-modal.page';

describe('AddDeviceModalPage', () => {
  let component: AddDeviceModalPage;
  let fixture: ComponentFixture<AddDeviceModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviceModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
