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
    AtLayoutToolbarDirective
} from './at-layout.component';
import {AtMediaModule} from '../at-media/at-media.module';
import {AtSidenavModule} from '../at-sidenav/at-sidenav.module';
import {AtScrollbarModule} from '../at-scrollbar/at-scrollbar.module';
import {CommonModule} from '@angular/common';
import {AtUtilService} from '../at-common/services/util.service';
import {PortalModule} from '@angular/cdk/portal';
import {MatSidenavModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';


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
        AtSidenavModule
    ],
    declarations: [
        AtLayoutComponent,
        AtLayoutToolbarDirective,
        AtLayoutHeaderDirective,
        AtLayoutSideNavDirective,
        AtLayoutSidePanelDirective,
        AtLayoutSideBarLeftDirective,
        AtLayoutSideBarRightDirective,
        AtLayoutContentDirective
    ],
    exports: [
        AtLayoutComponent,
        AtLayoutToolbarDirective,
        AtLayoutHeaderDirective,
        AtLayoutSideNavDirective,
        AtLayoutSidePanelDirective,
        AtLayoutSideBarLeftDirective,
        AtLayoutSideBarRightDirective,
        AtLayoutContentDirective
    ],
    providers: [
        AtUtilService
    ],
})
export class AtLayoutModule {
}
