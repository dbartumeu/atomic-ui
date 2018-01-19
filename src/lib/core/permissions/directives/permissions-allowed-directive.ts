import {Directive, OnInit, ElementRef, Input} from '@angular/core';
import {AtPermissionsService} from '../permissions.service';

@Directive({
    selector: '[atPermsAllowed]'
})
export class AtPermissionsAllowedDirective implements OnInit {

    /**
     * atPermsAllowed
     */
    @Input('atPermsAllowed') atHasPerms: Array<string>;

    /**
     * onAuthPerms
     */
    @Input('onAuthPerms') onAuthPerms: Function | string;

    /**
     * onUnauthPerms
     */
    @Input('onUnauthPerms') onUnauthPerms: Function | string;

    constructor(private _elem: ElementRef,
                private _permissionService: AtPermissionsService) {
    }

    ngOnInit() {
        this._permissionService.permsChanges.subscribe(() => {
            this.applyPermission();
        });

        this.applyPermission();
    }

    applyPermission() {
        const hasRegistered = this._permissionService.hasOne(this.atHasPerms);

        if (!hasRegistered) {
            if (typeof this.onAuthPerms === 'function') {
                this.onAuthPerms(this._elem);
            } else if (typeof this.onAuthPerms === 'string') {
                this._permissionService.applyStrategy(this.onAuthPerms, this._elem)
            } else {
                this._elem.nativeElement.style.display = 'none';
            }
        } else {
            if (typeof this.onUnauthPerms === 'function') {
                this.onUnauthPerms(this._elem);
            } else if (typeof this.onUnauthPerms === 'string') {
                this._permissionService.applyStrategy(this.onUnauthPerms, this._elem);
            } else {
                this._elem.nativeElement.style.display = '';
            }
        }
    }
}
