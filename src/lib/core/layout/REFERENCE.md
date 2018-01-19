## API reference for Atomic Layout

### Directives

#### Atomic Layout
Renders a layout object, wrapper for layout object components.<br>
**Selector:** at-layout<br>
**Exported as:** AtomicLayoutComponent<br>

##### Properties

`@Input()`<br>
`layoutType?: 'main' | 'basic' | 'cardOver'`<br>

**Description:**<br>
Sets Layout component's type. Defaults to 'basic'

---

`@Input()`<br>
`scrollOn?: "content" | "container"`<br>

**Description:**<br>
Sets where the scroll will be positioned inside the Layout component. If `scrollOn = "content"` the header is fixed and 
the scroll is placed above the header. Defaults to `'container'` header and content can be scrolled.

---

`@Input()`<br>
`cardWidth?: string`<br>

**Description:**<br>
The width of the card. Valid only if `layoutType='cardOver'`. Defaults to 75%

---

`@Input()`<br>
`cardAlign?: 'left' | 'center' | 'right'`<br>

**Description:**<br>
The card alignment.. Valid only if `layoutType='cardOver'`. Defaults to 75%

---

`@Input()`<br>
`cardOverlapTop?: number`<br>

**Description:**<br>
Sets the top overlap of the card in px. Valid only if `layoutType='cardOver'`. Defaults to 60

---

`@Input()`<br>
`cardOverlapBottom?: number`<br>

**Description:**<br>
Sets the bottom overlap of the card in px. Valid only if `layoutType='cardOver'`. Defaults to 20

---

`@Input()`<br>
`showAtScrollbar?: boolean`<br>

**Description:**<br>
Show AtScrollbar instead of browser scrollbar. Defaults to true

---

`@Output()`<br>
`onCloseSideBarLeft(): EventEmitter<boolean>`<br>

**Description:**<br>
Emits false when sidebar left is closed

---

`@Output()`<br>
`onCloseSideBarRight(): EventEmitter<boolean>`<br>

Emit false when sidebar right is closed

---

`@Output()`<br>
`onCloseSideNav(): EventEmitter<boolean>`<br>

Emit false when sideNav is closed

---


##### Methods

`toggleSideNav():void`<br>
**Description:**<br>
Open or close the Main sidenav. Valid only if `layoutType='main'`

---

`toggleSidePanel():void`<br>
**Description:**<br>
Open or close the side panel. Valid only if `layoutType='main'`

---

`toggleSideBarLeft():void`<br>
**Description:**<br>
Open or close the left sidebar. Valid only if `layoutType='main'` or `layoutType='cardOver'`

---

`toggleSideBarRight():void`<br>
**Description:**<br>
Open or close the right sidebar. Valid only if `layoutType='main'` or `layoutType='cardOver'`

---


#### Atomic Layout Header
Renders a header inside a layout component.<br>
**Selector:** at-layout-header<br>
**Exported as:** AtLayoutHeaderComponent<br>

##### Properties

`@Input()`<br>
`color?: string`<br>

**Description:**<br>
Sets the background color of the header. You can use any material color using the following format: `color-hue`, 
example `green-300`. Defaults to "transparent".

---

`@Input()`<br>
`height?: string`<br>

**Description:**<br>
Sets the header height. Any  Defaults to `'auto'`.

---

`@Input()`<br>
`pattern?: number`<br>

**Description:**<br>
Sets the background pattern of the header. Any number from 1 to 5. Defaults to `null`.

---

`@Input()`<br>
`position?: 'inside' | 'cover' | 'outside'`<br>

**Description:**<br>
Sets the header position relative to the layout content.<br>
`'inside'`: The header is inside the layout container.<br>
`'cover'`: The header covers the sidebars.<br> 
`'outside'`: The header is outside the container.<br> 
Defaults to `'inside'`.

---

#### Atomic Layout Content
A container for the content.<br>
**Selector:** at-layout-content<br>
**Exported as:** AtLayoutContentComponent<br>


#### Atomic Layout Sidebar Left
Renders a left sidebar.<br>
**Selector:** at-layout-sidebar-left<br>
**Exported as:** AtLayoutSideBarLeftComponent<br>

##### Properties

`@Input()`<br>
`width?: string`<br>

**Description:**<br>
Sets sidebar width. Defaults to `'200px'`.

---

`@Input()`<br>
`mode?: 'side' | 'cover' | null`<br>

**Description:**<br>
Sets sidebar mode. Defaults to `null`

---

`@Input()`<br>
`opened?: boolean`<br>

**Description:**<br>
Sets the sidebar opened property. Defaults to `true`

---

`@Input()`<br>
`mediaQuery?: string`<br>

**Description:**<br>
A media query string.<br>
Possible Values: `'xs' | 'sm' | 'gt-sm' | 'md' | 'gt-md' | 'lg' | 'gt-lg'`<br>
Defaults to `'gt-sm'`

---

`@Input()`<br>
`mediaClasses?: string`<br>

**Description:**<br>
A set of classes to apply based on mediaQuery. Defaults to `['at-sidenav-no-background']`

---

`@Input()`<br>
`showAtScrollbar?: boolean`<br>

**Description:**<br>
Show AtScrollbar instead browser scrollbar. Defaults to `true`

---

#### Atomic Layout Sidebar Right
Renders a right sidebar.<br>
**Selector:** at-layout-sidebar-right<br>
**Exported as:** AtLayoutSideBarRightComponent<br>

##### Properties

`@Input()`<br>
`width?: string`<br>

**Description:**<br>
Sets sidebar width. Defaults to `'200px'`.

---

`@Input()`<br>
`mode?: 'side' | 'cover' | null`<br>

**Description:**<br>
Sets sidebar mode. Defaults to `null`

---

`@Input()`<br>
`opened?: boolean`<br>

**Description:**<br>
Sets the sidebar opened property. Defaults to `true`

---

`@Input()`<br>
`mediaQuery?: string`<br>

**Description:**<br>
A media query string.<br>
Possible Values: `'xs' | 'sm' | 'gt-sm' | 'md' | 'gt-md' | 'lg' | 'gt-lg'`<br>
Defaults to `'gt-sm'`

---

`@Input()`<br>
`mediaClasses?: string`<br>

**Description:**<br>
A set of classes to apply based on mediaQuery. Defaults to `['at-sidenav-no-background']`

---

`@Input()`<br>
`showAtScrollbar?: boolean`<br>

**Description:**<br>
Show AtScrollbar instead browser scrollbar. Defaults to `true`

---

#### Atomic Layout Sidebar Right
Renders a sidebar that can be the main sidenav container.<br>
**Selector:** at-layout-sidenav<br>
**Exported as:** AtLayoutSideNavComponent<br>

##### Properties

`@Input()`<br>
`width?: string`<br>

**Description:**<br>
Sets sidebar width. Defaults to `'200px'`.

---

`@Input()`<br>
`mode?: 'side' | 'cover' | null`<br>

**Description:**<br>
Sets sidebar mode. Defaults to `null`

---

`@Input()`<br>
`opened?: boolean`<br>

**Description:**<br>
Sets the sidebar opened property. Defaults to `true`

---

`@Input()`<br>
`mediaQuery?: string`<br>

**Description:**<br>
A media query string.<br>
Possible Values: `'xs' | 'sm' | 'gt-sm' | 'md' | 'gt-md' | 'lg' | 'gt-lg'`<br>
Defaults to `'gt-sm'`

---

`@Input()`<br>
`mediaClasses?: string`<br>

**Description:**<br>
A set of classes to apply based on mediaQuery. Defaults to `['at-sidenav-no-background']`

---

`@Input()`<br>
`elevation?: number`<br>

**Description:**<br>
Renders a material elevation effect. Possible values: `1 to 24` Defaults to `null`.

---

#### Atomic Layout Footer
Renders a header inside a layout footer.<br>
**Selector:** at-layout-footer<br>
**Exported as:** AtLayoutFooterComponent<br>

##### Properties

`@Input()`<br>
`color?: string`<br>

**Description:**<br>
Sets the background color of the header. You can use any material color using the following format: `color-hue`, 
example `green-300`. Defaults to "transparent".

---

`@Input()`<br>
`height?: string`<br>

**Description:**<br>
Sets the header height. Any  Defaults to `'auto'`.

---

`@Input()`<br>
`position?: 'inside' | 'cover' | 'outside'`<br>

**Description:**<br>
Sets the header position relative to the layout content.<br>
`'inside'`: The header is inside the layout container.<br>
`'cover'`: The header covers the sidebars.<br> 
`'outside'`: The header is outside the container.<br> 
Defaults to `'inside'`.

---