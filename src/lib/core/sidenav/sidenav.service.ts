import * as _ from 'lodash';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Routes} from '@angular/router';
import {AtSidenavItem} from './sidenav-item/sidenav-item.model';
import {AtPermissionsService} from '../permissions/permissions.service';

@Injectable()
export class AtSidenavService {

    private _itemsSubject: BehaviorSubject<AtSidenavItem[]> = new BehaviorSubject<AtSidenavItem[]>([]);
    private atSidenavItems: AtSidenavItem[] = [];
    private atSidenavFlatItems: AtSidenavItem[] = [];

    /**
     * Observable for AtSidenavItems changes
     */
    atSidenavItemsChange: Observable<AtSidenavItem[]> = this._itemsSubject.asObservable();

    private _currentlyOpenSubject: BehaviorSubject<AtSidenavItem[]> = new BehaviorSubject<AtSidenavItem[]>([]);
    private _currentlyOpen: AtSidenavItem[] = [];

    /**
     * Observable for AtSidenavItem currently open
     */
    avSidenavCurrentlyOpenChange: Observable<AtSidenavItem[]> = this._currentlyOpenSubject.asObservable();

    /**
     * True is Sidenav is collapsed
     */
    isSidenavCollapsed: boolean;
    private isSidenavCollapsedSubject = new Subject<any>();

    /**
     * Observable for AtSidenav collapsible mode
     */
    public sidenavCollapsedChange = this.isSidenavCollapsedSubject.asObservable();

    public permsApplied = false;

    /**
     * Service provided with methods that allows you to add, edit and remove items from the sidenav.
     * A method to create all sidenav items based on app routes.
     * And utilities to find items, notify for changes and much more.
     */
    constructor(private atPermsService: AtPermissionsService) {
        atPermsService.permsChanges
            .subscribe((perms) => {
                this.applyPerms(perms);
            });
    }

    /**
     * Fix path route adding '/' character
     * @param path
     * @returns any
     */
    private fixRoutePath(path) {
        if (!path) {
            return '';
        }
        return path.startsWith('/') ? path : '/' + path;
    }

    /**
     * Notify when Sidenav changes to collapsed mode
     * @param isCollapsed
     * @internal use only
     */
    public toggleSidenavChanged(isCollapsed: boolean) {
        this.isSidenavCollapsedSubject.next(isCollapsed);
    }

    public applyPerms(perms: string[]) {
        if (this.atSidenavFlatItems.length > 0 && perms) {
            this.atSidenavFlatItems.forEach(item => {

                if (!item.routeData.atSidenavItem.renderItem && item.routeData.atPermissions) {

                    if (item.routeData.atPermissions.allow && item.routeData.atPermissions.allow.length > 0) {
                        if (!item.routeData.atPermissions.deny) {
                            if (_.intersection(perms, item.routeData.atPermissions.allow).length > 0) {
                                item.renderItem = true;
                            } else {
                                item.renderItem = false;
                            }
                        }
                    }

                    if (item.routeData.atPermissions.deny && item.routeData.atPermissions.deny.length > 0) {
                        if (!item.routeData.atPermissions.allow) {
                            if (_.intersection(perms, item.routeData.atPermissions.deny).length > 0) {
                                item.renderItem = false;
                            } else {
                                item.renderItem = true;
                            }
                        }
                    }

                }
            });


            this.atSidenavFlatItems.forEach(item => {
                let count = 0;
                item.children.forEach(child => {
                    if (child.renderItem) {
                        count++;
                    }
                });
                if (item.children.length > 0 && count === 0) {
                    item.renderItem = false;
                }
            });
            this._itemsSubject.next(this.atSidenavItems);
        }
        this.permsApplied = true;
    }

    public replaceUrlParams(url: string, params: any): string {
        let out = url;
        if (params) {
            Object.keys(params).forEach(key => {
                out = out.replace(':' + key, params[key]);
            });
        }

        return out;
    }

    /**
     * Build menu structure based on Route Data.
     * @param routes
     */
    public buildMenuByRoutes(routes: Routes, replaceParams?: any) {
        this.atSidenavItems = [];
        this.atSidenavFlatItems = [];

        routes.forEach(childRoute => {
            if (childRoute.data && childRoute.data.atSidenavItem) {
                let path = childRoute.data.atSidenavItem.pathPrefix ?
                    childRoute.data.atSidenavItem.pathPrefix + '/' + childRoute.path : childRoute.path;

                path = this.replaceUrlParams(path, replaceParams);

                const routeArr = path.split('/');
                routeArr.splice(routeArr.length - 1, 1);
                const parentRoute = routeArr.join('/');

                const parent = this.findItemByRoute(this.fixRoutePath(parentRoute), this.atSidenavFlatItems);

                if (parent) {
                    const newAtsidenavChild = new AtSidenavItem(
                        {
                            name: childRoute.data.atSidenavItem.name,
                            icon: childRoute.data.atSidenavItem.icon,
                            route: path,
                            routeData: childRoute.data,
                            position: childRoute.data.atSidenavItem.position ? childRoute.data.atSidenavItem.position : null,
                            badge: childRoute.data.atSidenavItem.badge || null,
                            badgeColor: childRoute.data.atSidenavItem.badgeColor || null,
                            customClass: childRoute.data.atSidenavItem.customClass || null,
                            renderItem: childRoute.data.atSidenavItem.renderItem || true,
                            collapsible: childRoute.data.atSidenavItem.collapsible,
                        }
                    );
                    this.addChild(parent, newAtsidenavChild, false);
                } else {
                    const newAtsidenavItem = new AtSidenavItem(
                        {
                            name: childRoute.data.atSidenavItem.name,
                            icon: childRoute.data.atSidenavItem.icon,
                            route: path,
                            routeData: childRoute.data,
                            position: childRoute.data.atSidenavItem.position,
                            badge: childRoute.data.atSidenavItem.badge || null,
                            badgeColor: childRoute.data.atSidenavItem.badgeColor || null,
                            customClass: childRoute.data.atSidenavItem.customClass || null,
                            renderItem: childRoute.data.atSidenavItem.renderItem || true,
                            collapsible: childRoute.data.atSidenavItem.collapsible,
                        }
                    );
                    this.addItem(newAtsidenavItem, false);
                }
            }
        });

        this._itemsSubject.next(this.atSidenavItems);
    }

    /**
     * Add new Menu Item
     * @param       atSidenavItem
     * @returns     The Item added
     * @throws      Will throw an error if the route exist on AtSidenavItems collection.
     */
    public addItem(atSidenavItem: AtSidenavItem, notifyChange: boolean = true): AtSidenavItem {
        const fixedRoute = this.fixRoutePath(atSidenavItem.route);

        if (this.findItemByRoute(fixedRoute, this.atSidenavItems)) {
            throw new Error('addItem(): AtSidenavItem.route must be unique. \'' +
                fixedRoute + '\' already exist on AtSidenavItems collection');
        }

        const newAtSidenavItem = new AtSidenavItem({
            name: atSidenavItem.name,
            icon: atSidenavItem.icon,
            route: fixedRoute,
            routeData: atSidenavItem.routeData,
            children: atSidenavItem.children || [],
            position: atSidenavItem.position || 99,
            badge: atSidenavItem.badge || null,
            badgeColor: atSidenavItem.badgeColor || null,
            customClass: atSidenavItem.customClass || null,
            renderItem: typeof atSidenavItem.renderItem === 'undefined' ? true : atSidenavItem.renderItem,
            collapsible: typeof atSidenavItem.collapsible === 'undefined' ? true : atSidenavItem.collapsible
        });

        this.atSidenavItems.push(newAtSidenavItem);
        this.atSidenavFlatItems.push(newAtSidenavItem);

        if (notifyChange) {
            this._itemsSubject.next(this.atSidenavItems);
        }

        return newAtSidenavItem;
    }

    /**
     * Add new Child Item
     * @param       parent: Parent Item
     * @param       child: Child Item
     * @returns     The Item added
     */
    public addChild(parent: AtSidenavItem, child: AtSidenavItem, notifyChange: boolean = true) {
        const fixedRoute = this.fixRoutePath(child.route);

        if (this.findItemByRoute(fixedRoute, this.atSidenavItems)) {
            throw new Error('addChild(): AtSidenavItem.route must be unique. \'' +
                fixedRoute + '\' already exist on AtSidenavItems collection');
        }

        const newAtSidenavChild = new AtSidenavItem({
            name: child.name,
            icon: child.icon,
            route: fixedRoute,
            routeData: child.routeData,
            parent: parent,
            children: child.children || [],
            position: child.position || 99,
            badge: child.badge || null,
            badgeColor: child.badgeColor || null,
            customClass: child.customClass || null,
            renderItem: typeof child.renderItem === 'undefined' ? true : child.renderItem,
            collapsible: typeof child.collapsible === 'undefined' ? true : child.collapsible
        });

        parent.children.push(newAtSidenavChild);
        this.atSidenavFlatItems.push(newAtSidenavChild);

        if (notifyChange) {
            this._itemsSubject.next(this.atSidenavItems);
        }


        return newAtSidenavChild;
    }

    /**
     * Update a Sidenav Item
     * @param route         The route to find the Item
     * @param name          Optional, Item display text
     * @param badge         Optional, Item Badge text
     * @param badgeColor    Optional, Item Badge Color
     * @returns             The Item added
     */
    public updateItem(route: string, name?: string, badge?: string, badgeColor?: string): AtSidenavItem {
        let item = this.findItemByRoute(route, this.atSidenavItems);
        item.name = name ? name : item.name;
        item.badge = badge ? badge : item.badge;
        item.badgeColor = badgeColor ? badgeColor : item.badgeColor;
        this._itemsSubject.next(this.atSidenavItems);

        return item;
    }

    /**
     * Remove a Sidenav Item
     * @param item
     */
    public removeItem(item: AtSidenavItem) {
        let index = this.atSidenavItems.indexOf(item);
        if (index > -1) {
            this.atSidenavItems.splice(index, 1);
        }

        this._itemsSubject.next(this.atSidenavItems);
    }

    /**
     * Get all Sidenav Items on the collection
     * @returns AtSidenavItem[]
     */
    public getAtSidenavItems(): AtSidenavItem[] {
        return this.atSidenavItems;
    }

    /**
     * Return an array based on AtSidenavItems Tree
     * @param       treeObj AtSidenavItems Tree
     * @returns     AtSidenavItem[]
     * @internal use only
     */
    public flattenTree() {
        return this.atSidenavFlatItems;
    }

    /**
     * True if Sidenav Item is open
     * @param item
     * @returns boolean
     * @internal use only
     */
    public isOpen(item: AtSidenavItem) {
        return (this._currentlyOpen.indexOf(item) !== -1);
    }

    /**
     * Toggle currently Sidenav Item open
     * @param item
     * @internal use only
     */
    public toggleCurrentlyOpen(item: AtSidenavItem) {
        let currentlyOpen = this._currentlyOpen;

        if (this.isOpen(item)) {
            if (currentlyOpen.length > 1) {
                currentlyOpen.length = this._currentlyOpen.indexOf(item);
            } else {
                currentlyOpen = [];
            }
        } else {
            currentlyOpen = this.getAllParents(item);
        }

        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    }

    /**
     * Returns all Sidenav Item Parents
     * @param item
     * @param currentlyOpen
     * @returns any
     *
     */
    getAllParents(item: AtSidenavItem, currentlyOpen: AtSidenavItem[] = []) {
        currentlyOpen.unshift(item);

        if (item.hasParent()) {
            return this.getAllParents(item.parent, currentlyOpen);
        } else {
            return currentlyOpen;
        }
    }

    /**
     * Find a Sidenav Item
     * @param       value           The search value
     * @param       compareValue    AtSidenavItem property to compare for
     * @returns     AtSidenavItem
     */
    findItem(value: string, compareValue: string = 'route') {
        if (compareValue == 'route') {
            return this.findItemByRoute(value, this.atSidenavItems);
        }

        if (compareValue == 'name') {
            return this.findItemByName(value, this.atSidenavItems);
        }
    }

    /**
     * Find a Sidenav Item by route
     * @param route
     * @param collection
     * @returns AtSidenavItem
     */
    findItemByRoute(route: string, collection: AtSidenavItem[], exact = true) {
        let result: any;
        if (exact) {
            result = _.find(collection, {'route': route});
        } else {
            const tmpResult: any[] = [];
            let closeRoute = '';
            collection.forEach(item => {
                if (route.includes(item.route)) {
                    tmpResult.push(item);
                }
            });

            tmpResult.forEach(item => {
                if (item.route.length > closeRoute.length) {
                    closeRoute = item.route;
                    result = item;
                }
            });

        }
        return result;
    }

    /**
     * Find a Sidenav Item by name
     * @param name
     * @param collection
     * @returns AtSidenavItem
     */
    findItemByName(name: string, collection: AtSidenavItem[]) {
        let result = _.find(collection, function (o) {
            return o.name.includes(name);
        });

        return result;
    }

    /**
     * Sort AtSidenavItems recursively by property
     * @param AtSidenavItem[] Sidenav Items Collection
     * @param propertyName Property to sort
     * @returns AtSidenavItem[]
     */
    sortAtSidenavItems(array: AtSidenavItem[], propertyName: string) {
        let that = this;

        array.forEach(function (item) {
            let keys = _.keys(item);
            keys.forEach(function (key) {
                if (_.isArray(item[key])) {
                    item[key] = that.sortAtSidenavItems(item[key], propertyName);
                }
            });
        });

        return _.sortBy(array, propertyName);
    };

    /**
     * Notify currently open AtSidenavItem
     * @param currentlyOpen
     * @internal use only
     */
    public setCurrentlyOpen(currentlyOpen: AtSidenavItem[]) {
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    }

    /**
     * Open parent AtSidenavItem based on the route
     * @param route
     * @internal use only
     */
    public openAtSidenavItemByRoute(route: string) {
        let currentlyOpen = [];

        let item = this.findItemByRoute(route, this.atSidenavFlatItems, false);

        if (item && item.hasParent()) {
            currentlyOpen = this.getAllParents(item);
        } else if (item) {
            currentlyOpen = [item];
        }

        this.setCurrentlyOpen(currentlyOpen);
    }

    /**
     * Return currently Sidenav Item open
     * @returns  AtSidenavItem
     * @internal use only
     */
    get currentlyOpen() {
        return this._currentlyOpen;
    }

}
