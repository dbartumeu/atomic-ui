import {NgModule} from '@angular/core';
import {AtIconComponent} from './icon.component';
import {AtCommonModule} from '../../core/common/common.module';
import {MatIconModule} from '@angular/material/icon';
import {AtColorService} from '../../core/common/services/color.service';

@NgModule({
    imports: [
        AtCommonModule,
        MatIconModule
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
    providers:[
        AtColorService
    ]
})
export class AtIconModule {
}
