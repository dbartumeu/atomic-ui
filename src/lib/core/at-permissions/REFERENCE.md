## API reference for Atomic Permissions

### Services

#### AtPermissionsService

##### Methods

`register(permsArr: Array<string>):void`<br>
**Description:**<br>
Registers an array of permissions
**Parameters:**<br>
`permsArr`: A permission array.

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