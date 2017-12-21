import {NgModule} from '@angular/core';
import {AtExceptPermissionDirective} from './directives/at-except-permissions-directive';
import {AtHasPermissionDirective} from './directives/at-has-permissions-directive';
import {AtPermissionsService} from './at-permissions.service';
import {AtPermissionsGuard, IAtPermissionsGuard} from './at-permissions-guard.service';

export {IAtPermissionsGuard, AtPermissionsGuard, AtPermissionsService};

@NgModule({
    declarations: [AtExceptPermissionDirective, AtHasPermissionDirective],
    imports: [],
    exports: [AtExceptPermissionDirective, AtHasPermissionDirective],
    providers: [AtPermissionsService, AtPermissionsGuard],
})
export class AtPermissionsModule {
}
