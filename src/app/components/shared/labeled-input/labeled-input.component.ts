import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';


const noop = () => {
};

@Component({

    selector: 'labeled-input',
    templateUrl: './labeled-input.component.html',
    styleUrls: ['labeled-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LabeledInputComponent),
            multi: true
        }
    ]
})


export class LabeledInputComponent implements ControlValueAccessor {

    @Input() disabled: boolean = false;
    @Input() label: string = "";
    @Input() type: string = "text";
    @Input() class: string;
    @Input() control: AbstractControlDirective | AbstractControl;
    @Input() showOnStartrError: boolean = false;
    @Input() showAsterik: boolean = false;

    private innerValue: any = '';
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    onBlur() {
        this.onTouchedCallback();
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
