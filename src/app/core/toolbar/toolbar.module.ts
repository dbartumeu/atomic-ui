// 3rd Party
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule} from '@angular/material';

// Atomic
import {AtSidenavModule} from 'atomic-ui';

// App
import {ToolbarComponent} from './toolbar.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatListModule,
        AtSidenavModule
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
    providers: [],
})
export class ToolbarModule {
}
