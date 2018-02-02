import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CoreComponent } from './core.component';
import { AtCommonModule, AtLayoutModule } from 'atomic-ui';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AtCommonModule,
        AtLayoutModule,
        ToolbarModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        AtLayoutModule,
    ],
    declarations: [
        CoreComponent,
    ],
    providers: [],
})
export class CoreModule {
}
