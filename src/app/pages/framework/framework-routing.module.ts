import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./core/layout/layout.component";
import {AtSidenavItem} from '@atomic/core';

export const FRAMEWORK_ROUTES: Routes = [
    {
        path: 'framework',
        pathMatch: 'full',
        redirectTo: 'framework/core/layout',
        data: {
            atSidenavItem: {
                name: 'Framework',
                position: 1,
                customClass: '',
                collapsible: false
            }as AtSidenavItem
        },
    },
    {
        path: 'framework/core',
        pathMatch: 'full',
        redirectTo: 'framework/core/layout',
        data: {
            atSidenavItem: {
                name: 'Core',
                position: 1,
                customClass: ''
            }as AtSidenavItem
        },
    },
    {
        path: 'framework/core/layout',
        component: LayoutComponent,
        data: {
            atSidenavItem: {
                name: 'Layout',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            }
        },
    },
];

export const FRAMEWORK_COMPONENTS = [
    LayoutComponent
];

@NgModule({
    imports: [RouterModule.forChild(FRAMEWORK_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class LayoutRoutingModule {

}
