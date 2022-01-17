import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let email = control.value;
    if (email && !email.includes('@')) {
      return { invalidEmail: true };
    } else if (email && email.indexOf('@') != -1) {
      let [_, domain] = email.split('@');
      if (domain !== 'gmail.com') {
        return { invalidFdmEmail: true };
      }
    }
    return null;
  }

}
