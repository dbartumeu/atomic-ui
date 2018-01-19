## API reference for Atomic Permissions

### Services

#### AtPermissionsService

##### Methods

`register(permsArr: Array<string>):void`<br>
**Description:**<br>
Registers an array of permissions.<br>
**Parameters:**<br>
`permsArr`: A permission array.

---

`add(perm: string): void`<br>
**Description:**<br>
Add a permission<br>
**Parameters:**<br>
`perm`: A permission string.

---

`remove(perm: string): void`<br>
**Description:**<br>
Remove a permission<br>
**Parameters:**<br>
`perm`: A permission string.

---

`has(perm: string): boolean`<br>
**Description:**<br>
Check if registered permissions has a defined `perm`<br>
**Parameters:**<br>
`perm`: A permission string.<br>
**Return:** `true` if `perm` exist false otherwise.

---

`hasOne(permsArr: Array<string>): boolean`<br>
**Description:**<br>
Check if registered permissions has at least one of `permsArr`<br>
**Parameters:**<br>
`permsArr`:A permission list.<br>
**Return:** `true` if `perm` exist false otherwise.

---

#### AtPermissionsGuard

##### Methods

`canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)`

---


### Directives

#### Permissions Allowed Directive
Shows dom elements on authorized permission and hides it otherwise<br>
**Selector:** [atPermsAllowed]<br>
**Exported as:** AtPermissionsAllowedDirective<br>

###### Properties

`@Input()`<br>
`atPermsAllowed: string[]`<br>

**Description:**<br>
Permissions allowed to access content.

---

`@Input()`<br>
`atOnAuthPermission: string | function`<br>

**Description:**<br>
`PermissionStrategy` or a Custom function to call on authorized permissions.<br>
**PermissionStrategy:**

| Value       | Behavior                                |
| :---------- | :-------------------------------------- |
| `'enable'`  |	Removes disabled attribute from element |
| `'disable'` |	Adds disabled attribute to element      |
| `'show'`    |	Set display style to inherit            |
| `'hide'`    |	Set display style to none               |

---

`@Input()`<br>
`atOnUnauthPermission: string | function`<br>

**Description:**<br>
`PermissionStrategy` or a Custom function to call on unauthorized permissions.<br>
**PermissionStrategy:**

| Value       | Behavior                                |
| :---------- | :-------------------------------------- |
| `'enable'`  |	Removes disabled attribute from element |
| `'disable'` |	Adds disabled attribute to element      |
| `'show'`    |	Set display style to inherit            |
| `'hide'`    |	Set display style to none               |

---


#### Permissions Denied Directive
Hides dom elements on unauthorized permission and shows it otherwise<br>
**Selector:** [atPermsAllowed]<br>
**Exported as:** AtPermissionsAllowedDirective<br>

###### Properties

`@Input()`<br>
`atPermsDenied: string[]`<br>

**Description:**<br>
Permissions denied  to access content.

---

`@Input()`<br>
`atOnAuthPermission: PermissionStrategy | function`<br>

**Description:**<br>
`PermissionStrategy` or a Custom function to call on authorized permissions.<br>
**PermissionStrategy:**

| Value       | Behavior                                |
| :---------- | :-------------------------------------- |
| `'enable'`  |	Removes disabled attribute from element |
| `'disable'` |	Adds disabled attribute to element      |
| `'show'`    |	Set display style to inherit            |
| `'hide'`    |	Set display style to none               |

---

`@Input()`<br>
`atOnUnauthPermission: PermissionStrategy | function`<br>

**Description:**<br>
`PermissionStrategy` or a Custom function to call on unauthorized permissions.
**PermissionStrategy:**

| Value       | Behavior                                |
| :---------- | :-------------------------------------- |
| `'enable'`  |	Removes disabled attribute from element |
| `'disable'` |	Adds disabled attribute to element      |
| `'show'`    |	Set display style to inherit            |
| `'hide'`    |	Set display style to none               |

---
