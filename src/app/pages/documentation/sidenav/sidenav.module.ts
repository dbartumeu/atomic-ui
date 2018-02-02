import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatMenuModule} from '@angular/material';
import {
    AtScrollbarModule,
    AtSidenavModule,
    AtSidenavCollapsibleDirective,
    AtPermissionsModule,
    AtEvents
} from 'atomic-ui';

import {SidenavComponent} from './sidenav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatMenuModule,
        AtScrollbarModule,
        AtPermissionsModule,
        AtSidenavModule.forRoot()
    ],
    declarations: [
        SidenavComponent
    ],
    exports: [
        AtSidenavCollapsibleDirective,
        SidenavComponent
    ],
    providers: [
        AtEvents
    ]
})
export class SidenavModule {
}
