import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arquivo2Component } from './arquivo2.component';

describe('Arquivo2Component', () => {
  let component: Arquivo2Component;
  let fixture: ComponentFixture<Arquivo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arquivo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arquivo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
