import { AbstractControl, ValidationErrors } from "@angular/forms";

export function maxNumberValidator(max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
        const isBigger = control.value > max;
        return isBigger ? { isBigger: { max } } : null;
    };
}
