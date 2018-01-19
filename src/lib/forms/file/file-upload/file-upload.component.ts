import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChild, ChangeDetectorRef,
  forwardRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ICanDisable, mixinDisabled, IControlValueAccessor, mixinControlValueAccessor } from '../../../core';
import { AtFileInputComponent, AtFileInputLabelDirective } from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export class AtFileUploadBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _AtFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(AtFileUploadBase));

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AtFileUploadComponent),
    multi: true,
  }],
  selector: 'at-file-upload',
  inputs: ['disabled', 'value'],
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
})
export class AtFileUploadComponent extends _AtFileUploadMixinBase implements IControlValueAccessor, ICanDisable {
  
  private _multiple: boolean = false;
  private _required: boolean = false;

  @ViewChild(AtFileInputComponent) fileInput: AtFileInputComponent;

  @ContentChild(AtFileInputLabelDirective) inputLabel: AtFileInputLabelDirective;

  /**
   * defaultColor?: string
   * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
   */
  @Input('defaultColor') defaultColor: string = 'primary';

  /**
   * activeColor?: string
   * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
   */
  @Input('activeColor') activeColor: string = 'accent';

  /**
   * cancelColor?: string
   * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
   */
  @Input('cancelColor') cancelColor: string = 'warn';

  /**
   * multiple?: boolean
   * Sets if multiple files can be dropped/selected at once in [AtFileUploadComponent].
   */
  @Input('multiple')
  set multiple(multiple: boolean) {
    this._multiple = coerceBooleanProperty(multiple);
  }
  get multiple(): boolean {
    return this._multiple;
  }

  /**
   * required?: boolean
   * Forces at least one file upload.
   * Defaults to 'false'
   */
  @Input('required')
  set required(required: boolean) {
    this._required = coerceBooleanProperty(required);
  }
  get required(): boolean {
    return this._required;
  }

  /**
   * accept?: string
   * Sets files accepted when opening the file browser dialog.
   * Same as 'accept' attribute in <input/> element.
   */
  @Input('accept') accept: string;

  /**
   * select?: function
   * Event emitted when a file is selected.
   * Emits a [File | FileList] object.
   */
  @Output('select') onSelect: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  /**
   * upload?: function
   * Event emitted when upload button is clicked.
   * Emits a [File | FileList] object.
   */
  @Output('upload') onUpload: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  /**
   * cancel?: function
   * Event emitted when cancel button is clicked.
   */
  @Output('cancel') onCancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(_changeDetectorRef: ChangeDetectorRef) {
    super(_changeDetectorRef);
  }

  /**
   * Method executed when upload button is clicked.
   */
  uploadPressed(): void {
    if (this.value) {
      this.onUpload.emit(this.value);
    }
  }

  /**
   * Method executed when a file is selected.
   */
  handleSelect(value: File | FileList): void {
    this.value = value;
    this.onSelect.emit(value);
  }

  /**
   * Methods executed when cancel button is clicked.
   * Clears files.
   */
  cancel(): void {
    this.value = undefined;
    this.onCancel.emit(undefined);
    // check if the file input is rendered before clearing it
    if (this.fileInput) {
      this.fileInput.clear();
    }
  }

  /** Method executed when the disabled value changes */
  onDisabledChange(v: boolean): void {
    if (v) {
      this.cancel();
    }
  }
}
