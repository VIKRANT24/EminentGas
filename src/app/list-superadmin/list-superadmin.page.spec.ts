import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuperadminPage } from './list-superadmin.page';

describe('ListSuperadminPage', () => {
  let component: ListSuperadminPage;
  let fixture: ComponentFixture<ListSuperadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSuperadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuperadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
