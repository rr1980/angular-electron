
import { ValidationErrors, FormControl } from '@angular/forms';
import * as _ from "lodash";

export const errorMessages = {


    'required': () => '##FIELD## wird benötigt',


    'minlength': (params) => '##FIELD## benötigt mindestens ' + params.requiredLength + ' Zeichen',


    'maxlength': (params) => '##FIELD## should not be greater then ' + params.requiredLength + ' characters',


    'pattern': () => 'Should be a valid',


    'email': () => "Should be vaild email.",

    'vaildPasswordEqual': () => "Passwörter stimmen nicht überein",

};



export function vaildPasswordRequired(checkEmptyToo: boolean) {

    return function vaildPasswordEqual(control: FormControl): ValidationErrors | boolean {
        if (!control || !control.parent) {
            return null;
        }


        if (!checkEmptyToo) {
            if (!control.value || (control.value as string).length === 0) {
                return true;
            }
        }

        var req = (control.value && (control.value as string).length > 0);


        var result = {};

        if (!req) {
            result = {
                'required': false
            };
        }
        else {
            result = true;
        }

        return result;
    }
}


export function vaildPasswordEqual(otherControlName: string) {

    return function vaildPasswordEqual(control: FormControl): ValidationErrors | boolean {
        if (!control || !control.parent) {
            return null;
        }
        let other = control.root.get(otherControlName);

        if (!other) {
            return null;
        }


        var controlValue = control.value === undefined || control.value === null ? "" : control.value;
        var otherValue = other.value === undefined || other.value === null ? "" : other.value;

        var equeal = (controlValue === otherValue);


        var result = {};


        if (!equeal) {
            result = {
                'vaildPasswordEqual': false,
            };
        }
        else {

            result = true;
        }

        return result;
    }
}