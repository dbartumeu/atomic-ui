import {NgModule} from '@angular/core';
import {AtExceptPermissionDirective} from './directives/at-permissions-denied-directive';
import {AtHasPermissionDirective} from './directives/at-permissions-allowed-directive';
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
