import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
    selector: 'at-form-field-box',
    templateUrl: './form-field-box.component.html',
    styleUrls: ['./form-field-box.component.scss']
})
export class AtFormFieldBoxComponent {

    /**
     * label?: string
     * Field label. Defaults to ''
     */
    @Input() label = '';

    /**
     * showLabel?: boolean
     * If true the field label is displayed before the form control. Defaults to false
     */
    @Input() showLabel = false;

    /**
     * showLabel: AbstractControl
     * Form field. Required.
     */
    @Input() field: AbstractControl;

    /**
     * status?: string
     * The field status. Defaults to null
     */
    @Input() status: 'required' | 'valid' | 'invalid' | null;

    /**
     * showStatusIndicator?: boolean
     * If true Shows an indicator besides the form field. Defaults to true
     */
    @Input() showStatusIndicator = true;

    /**
     * status?: boolean
     * Indicates if the field is required or not. Defaults to false
     */
    @Input() required = false;

    /**
     * customErrs?: string[]
     * An array of custom errors messages. Defaults to null
     */
    @Input() customErrs: string[] | null;


    constructor() {
    }


    renderMsg(err) {
        return err.msg.replace('%fieldLabel%', this.label).replace('%fieldValue%', err.value)
    }
}
