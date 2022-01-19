
import { Validacao } from './../validators';
import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appDiretivaemail][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useValue: Validacao.validarEmailModelo(), useExisting: DiretivaemailDirective, multi: true
  }]
})
export class DiretivaemailDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = Validacao.validarEmailModelo();
   }
  validate(c: FormControl) {
    return this.validator(c);
  }
}
