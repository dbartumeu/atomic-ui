import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AtValidators} from 'atomic-ui';

@Component({
    selector: 'form-field',
    templateUrl: './form-field.component.html'
})
export class FormFieldComponent implements OnInit {
    formFieldEx: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.formFieldEx = this.formBuilder.group({
            code: [null, [
                AtValidators.required(),
                AtValidators.minLength(3)
            ]],
            name: [null, [
                AtValidators.required(),
                AtValidators.maxLength(100)
            ]],
            websiteUrl: [null, [
                AtValidators.maxLength(70)
            ]],
            emailAddress: [null, [
                AtValidators.email(),
                AtValidators.maxLength(45)
            ]],
            officePhone: [null, [
                AtValidators.required(),
                AtValidators.maxLength(16)
            ]]
        });
    }
}
