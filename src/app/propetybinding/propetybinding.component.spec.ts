import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetybindingComponent } from './propetybinding.component';

describe('PropetybindingComponent', () => {
  let component: PropetybindingComponent;
  let fixture: ComponentFixture<PropetybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropetybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
