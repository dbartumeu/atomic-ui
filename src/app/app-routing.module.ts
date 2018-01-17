import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoreComponent} from './core/core.component';
import {DOCUMENTATION_ROUTES} from './pages/documentation/documentation-routing.module';

const routes: Routes = [
    {path: '', redirectTo: 'docs/master/getting-started', pathMatch: 'full'},
    {
        path: '',
        component: CoreComponent,
        children: [
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
