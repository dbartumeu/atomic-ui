import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {FEATURE_ROUTES} from './pages/feature/feature-routing.module';
import {FRAMEWORK_ROUTES} from './pages/framework/framework-routing.module';

const routes: Routes = [
    {path: '', redirectTo: 'dashboards/crm', pathMatch: 'full'},
    {
        path: '',
        component: CoreComponent,
        children: [
            ...FEATURE_ROUTES,
            ...FRAMEWORK_ROUTES
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
