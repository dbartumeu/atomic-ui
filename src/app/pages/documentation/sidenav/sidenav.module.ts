import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule, MatIconModule, MatListModule, MatButtonModule} from '@angular/material';
import {
    AtScrollbarModule,
    AtSidenavModule,
    AtSidenavCollapsibleDirective,
    AtPermissionsModule
} from '@atomic/core';

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
    ]
})
export class SidenavModule {
}
