import {
    Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild,
    ElementRef, Renderer2, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef
} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {TemplatePortalDirective} from '@angular/cdk/portal';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

import {ICanDisable, mixinDisabled, IControlValueAccessor, mixinControlValueAccessor} from '../../../core';

@Directive({
    selector: '[at-file-input-label]ng-template',
})
export class AtFileInputLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

export class AtFileInputBase {
    constructor(public _changeDetectorRef: ChangeDetectorRef) {
    }
}

/* tslint:disable-next-line */
export const _AtFileInputMixinBase = mixinControlValueAccessor(mixinDisabled(AtFileInputBase));

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AtFileInputComponent),
        multi: true,
    }],
    selector: 'at-file-input',
    inputs: ['disabled', 'value'],
    styleUrls: ['./file-input.component.scss'],
    templateUrl: './file-input.component.html',
})
export class AtFileInputComponent extends _AtFileInputMixinBase implements IControlValueAccessor, ICanDisable {

    private _multiple: boolean = false;

    /** The native `<input type="file"> element */
    @ViewChild('fileInput') _inputElement: ElementRef;
    get inputElement(): HTMLInputElement {
        return this._inputElement.nativeElement;
    }

    /**
     * color?: string
     * Sets button color. Uses same color palette accepted as [MatButton].
     */
    @Input('color') color: string;

    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [AtFileInputComponent].
     */
    @Input('multiple')
    set multiple(multiple: boolean) {
        this._multiple = coerceBooleanProperty(multiple);
    }

    get multiple(): boolean {
        return this._multiple;
    }

    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     */
    @Input('accept') accept: string;

    /**
     * select?: function
     * Event emitted a file is selected
     * Emits a [File | FileList] object.
     */
    @Output('select') onSelect: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

    constructor(private _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef) {
        super(_changeDetectorRef);
    }

    /**
     * Method executed when a file is selected.
     */
    handleSelect(files: File | FileList): void {
        this.writeValue(files);
        this.onSelect.emit(files);
    }

    /**
     * Used to clear the selected files from the [AtFileInputComponent].
     */
    clear(): void {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    }

    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void {
        if (v) {
            this.clear();
        }
    }

}
