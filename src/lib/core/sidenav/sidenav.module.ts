import {ModuleWithProviders, NgModule} from '@angular/core';
import {AtCommonModule} from '../common/common.module';
import {AtSidenavItemComponent} from './sidenav-item/sidenav-item.component';
import {AtSidenavCollapsibleDirective} from './sidenav-collapsed.directive';
import {AtSidenavService} from './sidenav.service';
import {AtSidenavItem} from './sidenav-item/sidenav-item.model';
import {AtPermissionsModule} from '../permissions/permissions.module';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

export {AtSidenavItem, AtSidenavService, AtSidenavCollapsibleDirective};



@NgModule({
    imports: [
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        AtCommonModule,
        AtPermissionsModule
    ],
    declarations: [
        AtSidenavCollapsibleDirective,
        AtSidenavItemComponent
    ],
    exports: [
        AtSidenavCollapsibleDirective,
        AtSidenavItemComponent,
    ]
})
export class AtSidenavModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AtSidenavModule,
            providers: [
                AtSidenavService
            ],
        };
    }
}

