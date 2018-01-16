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

#### AtMediaToggle
Toggles attributes, classes and styles in an element depending on screen size<br>
**Selector:** [atMediaToggle]<br>
**Exported as:** AtMediaToggleDirective<br>

###### Properties

`@Input()`<br>
`atMediaToggle: string`<br>

**Description:**<br>
Media query used to evaluate screen/window size. Toggles attributes, classes and styles if media query is matched.

---

`@Input()`<br>
`mediaAttributes: {[key: string]: string}`<br>

**Description:**<br>
Attributes to be toggled when media query matches.

---

`@Input()`<br>
`mediaClasses: string[]`<br>

**Description:**<br>
CSS Classes to be toggled when media query matches.

---

`@Input()`<br>
`mediaStyles: {[key: string]: string}`<br>

**Description:**<br>
CSS Styles to be toggled when media query matches.

---