import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreativogrupoaninhadoComponent } from './formularioreativogrupoaninhado.component';

describe('FormularioreativogrupoaninhadoComponent', () => {
  let component: FormularioreativogrupoaninhadoComponent;
  let fixture: ComponentFixture<FormularioreativogrupoaninhadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioreativogrupoaninhadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioreativogrupoaninhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
