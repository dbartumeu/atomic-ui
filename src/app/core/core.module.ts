import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToolbarModule} from './toolbar/toolbar.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {CoreComponent} from './core.component';
import {AtCommonModule, AtLayoutModule} from '@atomic/core';
import {MdIconsService} from './shared/md-icons';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AtCommonModule,
        AtLayoutModule,
        ToolbarModule,
        SidenavModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        AtLayoutModule
    ],
    declarations: [
        CoreComponent,
    ],
    providers: [
        MdIconsService
    ],
})
export class CoreModule {
}
