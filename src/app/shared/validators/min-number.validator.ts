import { AbstractControl, ValidationErrors } from "@angular/forms";

export function minNumberValidator(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
        const isLesser = control.value < min;
        return isLesser ? { isLesser: { min } } : null;
    };
}
