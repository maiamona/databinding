import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariomodeloComponent } from './formulariomodelo.component';

describe('FormulariomodeloComponent', () => {
  let component: FormulariomodeloComponent;
  let fixture: ComponentFixture<FormulariomodeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariomodeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariomodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
