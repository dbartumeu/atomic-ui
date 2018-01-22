import {NgModule} from '@angular/core';
import {AtIconComponent} from './icon.component';
import {AtCommonModule} from '../../core/common/common.module';

@NgModule({
    imports: [
        AtCommonModule
    ],
    declarations: [
        AtIconComponent
    ],
    exports: [
        AtIconComponent
    ],
    entryComponents: [
        AtIconComponent,
    ],
})
export class AtIconModule {
}
