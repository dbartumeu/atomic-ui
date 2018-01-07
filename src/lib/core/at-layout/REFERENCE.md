## API reference for Atomic Layout

### Directives

#### Atomic Layout
Renders a layout object, wrapper for layout object components.<br>
**Selector:** at-layout<br>
**Exported as:** AtomicLayoutComponent<br>

##### Properties

@Input() `layoutType?:string`<br>
`layoutType?: 'main' | 'basic' | 'cardOver'`<br>

**Description:**<br>
Sets Layout component's type. Defaults to 'basic'

---

`@Input()`<br>
`scrollOn?: "content" | "container"`<br>

**Description:**<br>
Sets where the scroll will be positioned inside the Layout component. If scrollOn = "content" the header is fixed and the scroll is placed above the header. Defaults to "container" header and content can be scrolled.

---

`@Input()`<br>
`showAtScrollbar?: boolean`<br>

**Description:**<br>
Show AtScrollbar instead of browser scrollbar. Defaults to true

---


##### Methods
| Name                   | Description |
| :--------------------- | :----------------------------------------------------------- |
| `toggleSideNav()`      | Open or close the Main sidenav in Main Layout. |
| `toggleSidePanel()`    | Open or close the side panel in Main Layout. |
| `toggleSideBarLeft()`  | Open or close the left sidebar in simple or carded layouts. |
| `toggleSideBarRight()` | Open or close the right sidebar in simple or carded layouts. |




