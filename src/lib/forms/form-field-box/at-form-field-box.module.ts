import {NgModule} from '@angular/core';
import {AtFormFieldBoxComponent} from './form-field-box.component';
import {AtCommonModule} from '../../core/common/common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        AtCommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AtFormFieldBoxComponent
    ],
    exports: [
        AtFormFieldBoxComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
        AtFormFieldBoxComponent,
    ],
})
export class AtFormFieldBoxModule {
}
