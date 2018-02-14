
// TODO add Fontawesome support
export class AtSidenavItem {
    name: string;
    icon: string;
    route: any;
    routeData: any; // To store route metadata
    parent: AtSidenavItem;
    children: AtSidenavItem[];
    position: number;
    badge: string;
    badgeColor: string;
    customClass: string;
    renderItem = true;
    pathPrefix: string;
    collapsible: boolean;

    constructor(atSidenavItem: any = null) {
        if (atSidenavItem) {
            this.name = atSidenavItem.name;
            this.icon = atSidenavItem.icon;
            this.route = atSidenavItem.route;
            this.routeData = atSidenavItem.routeData;
            this.parent = atSidenavItem.parent;
            this.children = this.mapChildren(atSidenavItem.children);
            this.position = atSidenavItem.position;
            this.badge = atSidenavItem.badge;
            this.badgeColor = atSidenavItem.badgeColor;
            this.customClass = atSidenavItem.customClass;
            this.renderItem = atSidenavItem.renderItem;
            this.pathPrefix = atSidenavItem.pathPrefix || '';
            this.collapsible = atSidenavItem.collapsible;
        }
    }

    hasChildren() {
        if (this.children) {
            return this.children.length > 0;
        }
        return false;
    }

    hasParent() {
        return !!this.parent;
    }

    mapChildren(list: AtSidenavItem[]) {
        if (list) {
            list.forEach((item, index) => {
                list[index] = new AtSidenavItem(item);
            });

            return list;
        }
    }

    isRouteString() {
        return this.route instanceof String || typeof this.route === 'string';
    }
}
