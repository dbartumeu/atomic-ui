## API reference for Atomic Icons

### Directives

#### Atomic Icon
`at-icon` component renders a md-icon or a letter with a border or colored background.<br>
**Selector:** at-icon<br>
**Exported as:** AtIconComponent<br>

##### Properties

`@Input()`<br>
`display?: 'mat-icon' | 'mat-letter'`<br>

**Description:**<br>
"mat-icon" renders a mat-icon, "mat-letter" renders the first letter of the property `name`. Defaults to `'mat-icon'`

---

`@Input()`<br>
`name: string`<br>

**Description:**<br>
Sets the icon name. It will be a `mat-icon` | `string`. Required.

---

`@Input()`<br>
`color?: 'auto' | AtColor`<br>

**Description:**<br>
Sets the icon color. Defaults to `'auto'`

---

`@Input()`<br>
`background?: 'none' | 'auto' | AtColor`<br>

**Description:**<br>
Sets the icon box background color. Defaults to `'none'`

---

`@Input()`<br>
`border?: string | null`<br>

**Description:**<br>
Sets the border width. Use any valid border width string ex: '10px'. Defaults to `null`

---

`@Input()`<br>
`radius?: string | null`<br>

**Description:**<br>
Sets the border radius. Use any valid border radius string ex: '10px'. Defaults to `'30px'`

---

`@Input()`<br>
`size?: string`<br>

**Description:**<br>
Sets the outer size of the icon. Defaults to `'30px'`

---

`@Input()`<br>
`fontSize?: string`<br>

**Description:**<br>
Sets the Icon font size. Defaults to `'24px'`

---