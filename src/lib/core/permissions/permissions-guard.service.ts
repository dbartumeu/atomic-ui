import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AtPermissionsService} from './permissions.service';


export interface IAtPermissionsGuard {
    allow?: Array<string>,
    deny?: Array<string>,
    redirectTo?: string | Function,
}

@Injectable()
export class AtPermissionsGuard implements CanActivate {

    constructor(private _permissionService: AtPermissionsService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const data = route.data['atPermissions'] as IAtPermissionsGuard;

        if (Array.isArray(data.allow) && Array.isArray(data.deny)) {
            throw Error('AtPermissions canActivate:' +
                ' \'allow\' and \'deny\' are not allowed together in route data. Use only one of them.');
        }


        if (Array.isArray(data.allow)) {
            const hasRegistered = this._permissionService.hasOne(data.allow)
            if (hasRegistered) {
                return true;
            }

            if (data.redirectTo && data.redirectTo !== undefined) {
                this.router.navigate([data.redirectTo]);
            }

            return false;
        }

        if (Array.isArray(data.deny)) {
            const hasRegistered = this._permissionService.hasOne(data.deny);
            if (!hasRegistered) {
                return true;
            }

            if (data.redirectTo && data.redirectTo !== undefined) {
                // console.log('navigating')
                this.router.navigate([data.redirectTo]);
            }

            return false;
        }
    }
}
