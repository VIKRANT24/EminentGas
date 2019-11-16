import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellCustomComponent } from './cell-custom.component';

describe('CellCustomComponent', () => {
  let component: CellCustomComponent;
  let fixture: ComponentFixture<CellCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellCustomComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
