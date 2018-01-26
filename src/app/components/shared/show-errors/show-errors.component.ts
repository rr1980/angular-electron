import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { errorMessages } from '../../../helper/custom-validators';

@Component({
    selector: 'show-errors',
    templateUrl: './show-errors.component.html'
})


export class ShowErrorsComponent {

    @Input()
    private control: AbstractControlDirective | AbstractControl;

    @Input() class: string;
    @Input() showOnStartrError: boolean = false;
    @Input()
    private fieldName: string;

    constructor() {

    }

    shouldShowErrors(): boolean {
        var result = false;
        if (this.showOnStartrError) {
            if (this.control && this.control.errors) {
                result = true;
            }
            else {
                result = false;
            }
        }
        else {
            result = this.control && this.control.errors && (this.control.dirty || this.control.touched);
        }

        result = result === null ? false : result;

        return result;
    }


    listOfErrors(): string[] {
        var result = Object.keys(this.control.errors)
            .map(field => this.getMessage(field, this.control.errors[field], this.control));

        return result;
    }


    private getMessage(type: string, params: any, control: any) {


        var fname = "";

        if (this.fieldName) {
            fname = this.fieldName;
        }
        else {
            fname = this.getControlName(control);
        }


        fname = fname.replace("_", " ").replace(" id", "").toLowerCase();

        fname = fname.replace(/\b\w/g, l => l.toUpperCase())


        var _type = errorMessages[type];
        if (_type) {
            var msg = _type(params);
            return msg.replace("##FIELD##", fname);
        }
        else {
            return "Validierungs-Message nicht gefunden!";
        }

    }


    getControlName(c: AbstractControl): string | null {


        const formGroup = c.parent.controls;


        return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
    }
}
