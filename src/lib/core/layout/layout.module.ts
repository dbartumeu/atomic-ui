import { NgModule } from '@angular/core';
import { AtCommonModule } from '../common/common.module';
import { AtMediaModule } from '../media/media.module';
import { AtSidenavModule } from '../sidenav/sidenav.module';
import { AtScrollbarModule } from '../scrollbar/scrollbar.module';
import { CommonModule } from '@angular/common';
import { AtUtilService } from '../common/services/util.service';
import { MatSidenavModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import {
    AtLayoutComponent,
    AtLayoutHeaderComponent,
    AtLayoutSideNavComponent,
    AtLayoutSideBarLeftComponent,
    AtLayoutContentComponent,
    AtLayoutSideBarRightComponent,
    AtLayoutFooterComponent,
} from './layout.component';

export {AtLayoutComponent}

@NgModule({
    imports: [
        CommonModule,
        ScrollDispatchModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        AtCommonModule,
        AtMediaModule,
        AtScrollbarModule,
        AtSidenavModule,
    ],
    declarations: [
        AtLayoutComponent,
        AtLayoutHeaderComponent,
        AtLayoutContentComponent,
        AtLayoutFooterComponent,
        AtLayoutSideBarLeftComponent,
        AtLayoutSideBarRightComponent,
        AtLayoutSideNavComponent,
    ],
    exports: [
        MatSidenavModule,
        AtLayoutComponent,
        AtLayoutHeaderComponent,
        AtLayoutContentComponent,
        AtLayoutFooterComponent,
        AtLayoutSideBarLeftComponent,
        AtLayoutSideBarRightComponent,
        AtLayoutSideNavComponent,
    ],
    providers: [
        AtUtilService,
    ],
})

export class AtLayoutModule {
}
