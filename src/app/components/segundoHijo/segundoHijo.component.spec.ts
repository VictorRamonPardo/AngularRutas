/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SegundoHijoComponent } from './segundoHijo.component';

describe('SegundoHijoComponent', () => {
  let component: SegundoHijoComponent;
  let fixture: ComponentFixture<SegundoHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
