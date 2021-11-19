import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';


export function ValidatorsModule(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.ValidatorsModule) {
        return;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ ValidatorsModule: true });
    } else {
        matchingControl.setErrors(null);
    }
}
 }

    
