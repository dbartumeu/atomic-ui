## API reference for Atomic Search

### Directives

#### Atomic Search Input
Generates a search input with its animated cancel button.<br>
**Selector:** at-search-input<br>
**Exported as:** AtSearchInputComponent<br>

##### Properties

`@Input()`<br>`debounce?: number`

**Description:**<br>
Debounce timeout between keypresses. Defaults to `400`.   

---

`@Input()`<br>`placeholder?: string`

**Description:**<br>
Placeholder for the underlying input component.

---

`@Input()`<br>`showUnderline?: boolean`

**Description:**<br>
Sets if the input underline should be visible. Defaults to `false`. 

---

`@Input()`<br>`clearIcon?: string`

**Description:**<br>
The icon used to clear the search input. Defaults to `'cancel'` icon.

---

`@Output()`<br>`searchDebounce($event): EventEmitter<string>`

**Description:**<br>
Event emitted after the `debounce` timeout.

---

`@Output()`<br>`search($event): EventEmitter<string>`

**Description:**<br>
Event emitted after the key enter has been pressed.

---

`@Output()`<br>`clear($event): EventEmitter<void>`

**Description:**<br>
Event emitted after the clear icon has been clicked.

---

`@Output()`<br>`blur($event): EventEmitter<void>`

**Description:**<br>
Event emitted after the blur event has been called in underlying input.

---


#### Atomic SearchBox
Generates a search box with animations.<br>
**Selector:** at-search-box<br>
**Exported as:** AtSearchBoxComponent<br>

##### Properties

`@Input()`<br>`debounce?: number`

**Description:**<br>
Debounce timeout between keypresses. Defaults to `400`.   

---

`@Input()`<br>`placeholder?: string`

**Description:**<br>
Placeholder for the underlying input component.  

---

`@Input()`<br>`backIcon?: string`

**Description:**<br>
The icon used to close the search toggle, only shown when `alwaysVisible` is `false`. Defaults to `'search'` icon. 

---

`@Input()`<br>`searchIcon?: string`

**Description:**<br>
The icon used to open/focus the search toggle. Defaults to `'search'` icon.  

---

`@Input()`<br>`clearIcon?: string`

**Description:**<br>
The icon used to clear the search input. Defaults to 'cancel' icon.  

---

`@Input()`<br>`showUnderline?: boolean`

**Description:**<br>
Sets if the input underline should be visible. Defaults to `false`.  

---

`@Input()`<br>`alwaysVisible?: boolean`

**Description:**<br>
Sets if the input should always be visible. Defaults to `false`.

---

`@Input()`<br>`alwaysVisible?: boolean`

**Description:**<br>
Sets if the input should always be visible. Defaults to `false`.

---

`@Output()`<br>`searchDebounce($event): EventEmitter<string>`

**Description:**<br>
Event emitted after the `debounce` timeout.

---

`@Output()`<br>`search($event): EventEmitter<string>`

**Description:**<br>
Event emitted after the key enter has been pressed.

---

`@Output()`<br>`clear($event): EventEmitter<void>`

**Description:**<br>
Event emitted after the clear icon has been clicked.

---

`@Output()`<br>`blur($event): EventEmitter<void>`

**Description:**<br>
Event emitted after the blur event has been called in underlying input.

---