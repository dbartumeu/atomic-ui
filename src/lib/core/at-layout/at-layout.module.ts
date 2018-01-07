import { NgModule } from '@angular/core';
import { AtCommonModule } from '../at-common/at-common.module';
import { AtMediaModule } from '../at-media/at-media.module';
import { AtSidenavModule } from '../at-sidenav/at-sidenav.module';
import { AtScrollbarModule } from '../at-scrollbar/at-scrollbar.module';
import { CommonModule } from '@angular/common';
import { AtUtilService } from '../at-common/services/util.service';
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
} from './at-layout.component';

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
