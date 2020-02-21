import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperdeviceactivityPage } from './superdeviceactivity.page';

describe('SuperdeviceactivityPage', () => {
  let component: SuperdeviceactivityPage;
  let fixture: ComponentFixture<SuperdeviceactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperdeviceactivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperdeviceactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
