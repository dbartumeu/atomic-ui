import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {FEATURE_ROUTES} from './pages/feature/feature-routing.module';
import {DOCUMENTATION_ROUTES} from './pages/documentation/documentation-routing.module';

const routes: Routes = [
    // {path: '', redirectTo: 'docs/untagged/framework', pathMatch: 'full'},
    {
        path: '',
        component: CoreComponent,
        children: [
            ...FEATURE_ROUTES,
            ...DOCUMENTATION_ROUTES
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class RoutingModule {
}
