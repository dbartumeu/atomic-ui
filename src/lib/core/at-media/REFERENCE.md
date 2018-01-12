## API reference for Atomic Media Queries

### Services

#### AtMediaService
This service is designed to provide basic media query evaluation for responsive applications. It has pre-programmed 
support for media queries that match the layout breakpoints:

| Name      | Description                             |
| :-------- | :-------------------------------------- |
| xs        | max-width: 599px                        |
| gt-xs     | min-width: 600px                        |
| sm        | min-width: 600px and max-width: 959px   |
| gt-sm     | min-width: 960px                        |
| md        | min-width: 960px and max-width: 1279px  |
| gt-gm     | min-width: 1280px                       |
| lg        | min-width: 1280px and max-width: 1919px |
| gt-lg     | min-width: 1920px                       |
| xl        | min-width: 1920px                       |
| landscape | landscape                               |
| portrait  | portrait                                |
| print     | print                                   |


##### Properties

`query(query: string):void`<br>
**Description:**<br>
Used to evaluate whether a given media query is true or false given the current device's screen / window size.
**Parameters:**<br>
`query`: A media query string listed above.<br>

---

`registerQuery(query: string):void`<br>
**Description:**<br>
Registers a media query and returns an `Observable` that will re-evaluate and return if the given media query matches 
on window resize.
**Parameters:**<br>
`query`: A media query string listed above.<br>

---

`deregisterQuery(query: string):void`<br>
**Description:**<br>
Deregisters a query so its stops being notified or used.
**Parameters:**<br>
`query`: A media query string listed above.<br>

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