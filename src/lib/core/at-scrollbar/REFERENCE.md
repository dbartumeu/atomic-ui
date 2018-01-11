## API reference for Atomic Scrollbar

### Atomic Scrollbar
Atomic Scrollbar Renders custom overlay-scrollbar component with native scrolling mechanism.<br>
**Selector:** at-scrollbar<br>
**Exported as:** AtomicScrollbarComponent<br>

#### Properties

@Input()<br>
`render?: boolean`<br>
**Description:**<br>
Sets if the custom scrollbar will be rendered. Defaults to `true`

---

@Input()<br>
`trackX?: boolean`<br>
**Description:**<br>
Horizontal scrollbar. Defaults to `false`

---

@Input()<br>
`trackY?: boolean`<br>
**Description:**<br>
Vertical scrollbar. Defaults to `true`

---

@Input()<br>
`autoHide?: boolean`<br>
**Description:**<br>
Hide scrollbars, and show them on hover. Defaults to `true`

---

@Input()<br>
`autoUpdate?: boolean`<br>
**Description:**<br>
Auto-update scrollbars on content changes. Defaults to `true`

---

@Input()<br>
`viewClass?: string | null`<br>
**Description:**<br>
Add custom class to the view. Defaults to `null`

---

@Input()<br>
`barClass?: string | null`<br>
**Description:**<br>
Add custom class to scrollbars. Defaults to `null`

---

@Input()<br>
`thumbClass?: string | null`<br>
**Description:**<br>
Add custom class to scrollbars' thumbnails. Defaults to `null`

---

#### Methods

`update():void`<br>
Update scrollbars manually.

---

`scrollRef.scrollXTo(position, duration?):void`<br>
**Description:**<br>
Scroll horizontally.

**Parameters:**<br>
`position`: Scrolling position on X axis in pixels.<br>
`duration?`:  Time to reach position in milliseconds. Defaults `200`.

---

`scrollRef.scrollYTo(position, duration?):void`<br>
Scroll vertically.

**Parameters:**<br>
`position`: Scrolling position on Y axis in pixels.<br>
`duration?`:  Time to reach position in milliseconds. Defaults `200`.

---



