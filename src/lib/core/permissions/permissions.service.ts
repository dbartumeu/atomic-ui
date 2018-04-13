import {Injectable, EventEmitter, ElementRef} from '@angular/core';

@Injectable()
export class AtPermissionsService {
    private _perms: Array<string> = [];
    private _permsChange: EventEmitter<any> = new EventEmitter();

    constructor() {

    }

    /**
     * Registers an array of permissions
     * @param permsArr: string[]
     */
    public register(permsArr: Array<string>): void {
        if (!Array.isArray(permsArr)) {
            throw Error('AtPermissions register: Permissions parameter is not array.');
        }

        this.removeAll();
        for (const perm of permsArr) {
            if (typeof perm === 'string' && !this.has(perm)) {
                this._perms.push(perm);
            }
        }
        this._permsChange.emit(this._perms);
    }

    /**
     * Add a permission
     * @param permission
     */
    public add(perm: string): void {
        if (typeof perm === 'string' && !this.has(perm)) {
            this._perms.push(perm);
            this._permsChange.emit(this._perms);
        }
    }

    /**
     * Remove a permission
     * @param perm: string
     */
    public remove(perm: string): void {
        if (typeof perm !== 'string') {
            return;
        }

        const i = this._perms.indexOf(perm);
        if (i < 0) {
            return;
        }

        this._perms.splice(i, 1);
        this._permsChange.emit(null);
    }

    /**
     * Check if registered permissions has a defined `perm`
     * @param perm: string
     * @returns true if permissions has a perm
     */
    public has(perm: string): boolean {
        if (typeof perm !== 'string') {
            return false;
        }

        return this._perms.indexOf(perm) > -1;
    }

    /**
     * Check if registered permissions has at least one of `permsArr`
     * @param permsArr: string[]
     * @returns true if permissions has at least one of `permsArr`
     */
    public hasOne(permsArr: Array<string>): boolean {
        if (!Array.isArray(permsArr)) {
            throw Error('AtPermissions hasOne: Permissions parameter is not array.');
        }

        return permsArr.some(v => {
            if (typeof v === 'string') {
                return this._perms.indexOf(v) >= 0;
            }
        });
    }

    /**
     * Remove all permissions
     */
    public removeAll(): void {
        this._perms = [];
        this._permsChange.emit(null);
    }

    /**
     * @param strategy: string
     * @param element: ElementRef
     */
    public applyStrategy(strategy: string, element: ElementRef) {
        switch (strategy) {
            case 'enable':
                element.nativeElement.removeAttribute('disabled');
                break;
            case 'disable':
                element.nativeElement.setAttribute('disabled', 'true');
                break;
            case 'show':
                element.nativeElement.style.display = 'inherit';
                break;
            case 'hide':
                element.nativeElement.style.display = 'none';
                break;
            default:
                throw Error('AtPermissions applyStrategy:' +
                    ' onUnauthorized attr has to be a function or one of this items: ' +
                    '[\'enable\' | \'disable\' | \'show\' | \'hide\']');
        }
    }

    /**
     * Return all registered permissions
     * @returns Array<string>
     */
    get perms(): Array<string> {
        return this._perms;
    }

    /**
     * Observable to permissions changes
     * @returns EventEmitter<any>
     */
    get permsChanges(): EventEmitter<any> {
        return this._permsChange;
    }
}
