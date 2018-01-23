import {NgModule} from '@angular/core';
import {AtFormFieldBoxComponent} from './form-field-box.component';
import {AtCommonModule} from '../../core/common/common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule, MatIconModule} from '@angular/material';

@NgModule({
    imports: [
        AtCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatTooltipModule
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
