## API reference for Atomic notifications

### Directives

#### Atomic Notification Count
`at-notification-count` element renders a number of notifications.<br>
**Selector:** at-layout<br>
**Exported as:** AtomicNotificationCountComponent<br>

##### Properties

`@Input()`<br>
`color?: 'primary' | 'accent' | 'warn'`<br>

**Description:**<br>
Sets Layout component's type. Sets the theme color of the notification tip. Defaults to `'warn'`

---

`@Input()`<br>
`notifications?: number | boolean`<br>

**Description:**<br>
Number for the notification count. Shows number if the input is a positive number or its no count state if 
boolean `'true'`

---

`@Input()`<br>
`positionX?: AtNotificationCountPositionX | 'before' |'after' | 'center'`<br>

**Description:**<br>
Sets the X position of the notification tip. Defaults to `'after'` if it has content, else `'center'`.

---

`@Input()`<br>
`positionY?: AtNotificationCountPositionY or 'top', 'bottom' or 'center'`<br>

**Description:**<br>
Sets the Y position of the notification tip. Defaults to `'top'` if it has content, else `'center'`.

---