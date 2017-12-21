import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlankComponent} from "./blank/blank.component";

export const FEATURE_ROUTES: Routes = [
    {
        path: 'blank',
        component: BlankComponent,
        data: {
            atSidenavItem: {
                name: 'Blank',
                icon: 'crop_landscape',
                position: 1,
                customClass: '',
            }
        },
    },
];

export const FEATURE_COMPONENTS = [
    BlankComponent
];

@NgModule({
    imports: [RouterModule.forChild(FEATURE_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class FeatureRoutingModule {

}
