import {NgModule} from '@angular/core';
import {AtCommonModule} from '../at-common/at-common.module';
import {
    AtLayoutComponent,
    AtLayoutContentDirective,
    AtLayoutHeaderDirective,
    AtLayoutSideBarLeftDirective,
    AtLayoutSideBarRightDirective,
    AtLayoutSideNavDirective,
    AtLayoutSidePanelDirective,
    AtLayoutToolbarDirective,
} from './at-layout.component';
import {AtMediaModule} from '../at-media/at-media.module';
import {AtSidenavModule} from '../at-sidenav/at-sidenav.module';
import {AtScrollbarModule} from '../at-scrollbar/at-scrollbar.module';
import {CommonModule} from '@angular/common';
import {AtUtilService} from '../at-common/services/util.service';
import {PortalModule} from '@angular/cdk/portal';
import {MatSidenavModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {AtLayoutHeaderComponent} from './at-layout-header/at-layout-header.component';
import {AtLayoutBasicComponent} from './at-layout-basic/at-layout-basic.component';
import {AtLayoutCardOverComponent} from './at-layout-card-over/at-layout-card-over.component';
import {AtLayoutFooterComponent} from "./at-layout-footer/at-layout-footer.component";
import {AtLayoutSidenavComponent} from "./at-layout-sidenav/at-layout-sidenav.component";
import {AtLayoutSidenavLeftComponent} from "./at-layout-sidenav-left/at-layout-sidenav-left.component";

export {AtLayoutComponent};

// Todo Pending sizes.
@NgModule({
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        AtCommonModule,
        AtMediaModule,
        PortalModule,
        AtScrollbarModule,
        AtSidenavModule,
    ],
    declarations: [
        AtLayoutComponent,
        AtLayoutToolbarDirective,
        AtLayoutHeaderDirective,
        AtLayoutSideNavDirective,
        AtLayoutSidePanelDirective,
        AtLayoutSideBarLeftDirective,
        AtLayoutSideBarRightDirective,
        AtLayoutContentDirective,
        AtLayoutHeaderComponent,
        AtLayoutFooterComponent,
        AtLayoutBasicComponent,
        AtLayoutCardOverComponent,
        AtLayoutSidenavComponent,
        AtLayoutSidenavLeftComponent,
    ],
    exports: [
        AtLayoutComponent,
        AtLayoutToolbarDirective,
        AtLayoutHeaderDirective,
        AtLayoutSideNavDirective,
        AtLayoutSidePanelDirective,
        AtLayoutSideBarLeftDirective,
        AtLayoutSideBarRightDirective,
        AtLayoutContentDirective,
        AtLayoutHeaderComponent,
        AtLayoutFooterComponent,
        AtLayoutBasicComponent,
        AtLayoutCardOverComponent,
        AtLayoutSidenavComponent,
        AtLayoutSidenavLeftComponent,
    ],
    providers: [
        AtUtilService,
    ],
})

export class AtLayoutModule {
}
