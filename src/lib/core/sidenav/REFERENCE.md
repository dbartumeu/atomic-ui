## API reference for Atomic Sidenav

### Services

#### Atomic Sidenav Service
Service provided with methods that allows you to add, edit and remove items from the sidenav. Also provided a method to 
create all sidenav items based on app routes. Even provided you with utilities to find items, notify for changes and 
much more.

##### Methods

`addItem(avSidenavItem: AtSidenavItem, notifyChange: boolean = true): AtSidenavItem`<br>
**Description:**<br>
Add a new Menu Item. If `notifyChange` = `true` every time a new child is added a new event is emitted. It's highly 
recommendable turn off this notifier on first load.

---

`addChild(parent: AtSidenavItem, child: AtSidenavItem, notifyChange: boolean = true): AtSidenavItem`<br>
**Description:**<br>
Add new Child Item. If `notifyChange` = `true` every time a new child is added a new event is emitted. It's highly 
recommendable turn off this notifier on first load.

---

`updateItem(route: string, name?: string, badge?: string, badgeColor?: string): AtSidenavItem`<br>
**Description:**<br>
Updates a Sidenav Item.

---

`getAtSidenavItems(): AtSidenavItem[]`<br>
**Description:**<br>
Returns a list of Sidenav Items.

---

`findItemByRoute(route: string, collection: AtSidenavItem[]): AtSidenavItem`<br>
**Description:**<br>
Find a Sidenav Item by route.

---

`findItem(value: string, compareValue: string = 'route'): AtSidenavItem`<br>
**Description:**<br>
Find a Sidenav Item by property.

---

`buildMenuByRoutes(routes): void`<br>
**Description:**<br>
Build the Sidenav Items based on route data.

---

`openAtSidenavItemByRoute(route): void`<br>
**Description:**<br>
Open a sidenav Item based on the `route` param.

---

### Directives

#### Atomic Sidenav Item
Renders a sidenav Item.<br>
**Selector:** at-sidenav-item<br>
**Exported as:** AtSidenavItemComponent<br>

##### Properties

@Input()<br>
`item?: atSidenavItem`<br>
**Description:**<br>
An AtSidenavItem Object.

---