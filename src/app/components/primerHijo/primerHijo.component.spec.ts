/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrimerHijoComponent } from './primerHijo.component';

describe('PrimerHijoComponent', () => {
  let component: PrimerHijoComponent;
  let fixture: ComponentFixture<PrimerHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
