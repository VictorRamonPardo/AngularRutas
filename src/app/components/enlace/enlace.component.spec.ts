/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnlaceComponent } from './enlace.component';

describe('EnlaceComponent', () => {
  let component: EnlaceComponent;
  let fixture: ComponentFixture<EnlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
