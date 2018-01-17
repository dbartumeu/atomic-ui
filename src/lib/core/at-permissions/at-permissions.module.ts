import {NgModule} from '@angular/core';
import {AtPermissionsDeniedDirective} from './directives/at-permissions-denied-directive';
import {AtPermissionsAllowedDirective} from './directives/at-permissions-allowed-directive';
import {AtPermissionsService} from './at-permissions.service';
import {AtPermissionsGuard, IAtPermissionsGuard} from './at-permissions-guard.service';

export {IAtPermissionsGuard, AtPermissionsGuard, AtPermissionsService};

@NgModule({
    declarations: [AtPermissionsDeniedDirective, AtPermissionsAllowedDirective],
    imports: [],
    exports: [AtPermissionsDeniedDirective, AtPermissionsAllowedDirective],
    providers: [AtPermissionsService, AtPermissionsGuard],
})
export class AtPermissionsModule {
}
