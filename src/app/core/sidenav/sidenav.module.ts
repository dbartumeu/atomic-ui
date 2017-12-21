import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule, MatIconModule, MatListModule} from '@angular/material';
import {
    AtScrollbarModule,
    AtSidenavModule,
    AtSidenavCollapsibleDirective
} from '@atomic/core';

import {SidenavComponent} from './sidenav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        AtScrollbarModule,
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
