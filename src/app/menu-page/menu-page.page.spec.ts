import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPagePage } from './menu-page.page';

describe('MenuPagePage', () => {
  let component: MenuPagePage;
  let fixture: ComponentFixture<MenuPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
