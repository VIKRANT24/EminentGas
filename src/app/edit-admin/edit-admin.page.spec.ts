import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminPage } from './edit-admin.page';

describe('EditAdminPage', () => {
  let component: EditAdminPage;
  let fixture: ComponentFixture<EditAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
