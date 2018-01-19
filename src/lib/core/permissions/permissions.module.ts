import {NgModule} from '@angular/core';
import {AtPermissionsDeniedDirective} from './directives/permissions-denied-directive';
import {AtPermissionsAllowedDirective} from './directives/permissions-allowed-directive';
import {AtPermissionsService} from './permissions.service';
import {AtPermissionsGuard, IAtPermissionsGuard} from './permissions-guard.service';

export {IAtPermissionsGuard, AtPermissionsGuard, AtPermissionsService};

@NgModule({
    declarations: [AtPermissionsDeniedDirective, AtPermissionsAllowedDirective],
    imports: [],
    exports: [AtPermissionsDeniedDirective, AtPermissionsAllowedDirective],
    providers: [AtPermissionsService, AtPermissionsGuard],
})
export class AtPermissionsModule {
}
