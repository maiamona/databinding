import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export class Validacao {
  static validarEmail(control: FormControl) {
    let email = control.value;
    if (email && email.indexOf("@") != -1) {
      let [_, dominio] = email.split("@");
      if (dominio === "udemy.com") {
        return {
          dominioValido: true
        }
      } else {
        return {
          dominioValido: false
        }
      }
    }
    return null;
  }
  static validarEmailModelo(): ValidatorFn {
    return (control: AbstractControl) => {
      let email = control.value;
      if (email && email.indexOf("@") != -1) {
        let [_, dominio] = email.split("@");
        if (dominio === "udemy.com") {
          return null;
        } else {
          return {
            dominioValido: {
              valid: false
            }
          }
        }
      }
      return null;
    }
  }
}