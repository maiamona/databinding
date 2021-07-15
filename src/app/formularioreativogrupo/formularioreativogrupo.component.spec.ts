import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreativogrupoComponent } from './formularioreativogrupo.component';

describe('FormularioreativogrupoComponent', () => {
  let component: FormularioreativogrupoComponent;
  let fixture: ComponentFixture<FormularioreativogrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioreativogrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioreativogrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
