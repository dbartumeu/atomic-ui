## API reference for Atomic Form Field Box

### Directives

#### Atomic Form Field Box
Provides automatic error display for atomic error, field status (required, valid, not valid). And an horizontal 
field label<br>
**Selector:** at-form-field-box<br>
**Exported as:** AtFormFieldBoxComponent<br>

##### Properties

`@Input()`<br>`label?: string`

**Description:**<br>
Field label. Defaults to `''`.   

---

`@Input()`<br>`showLabel?: boolean`

**Description:**<br>
If `true` the field label is displayed before the form control. Defaults to `false`.   

---

`@Input()`<br>`field?: AbstractControl`

**Description:**<br>
Form field. Required to get form status values and errors. 

---

`@Input()`<br>`status?: 'required'|'valid'|'invalid'`

**Description:**<br>
The field status. Force display the indicator based on a custom status and not based on the field status. 
Defaults to `null`.

---

`@Input()`<br>`showStatusIndicator?: boolean`

**Description:**<br>
If true Shows an indicator besides the form field. Defaults to `true`.

---

`@Input()`<br>`required?: boolean`

**Description:**<br>
Indicates if the field is required or not. Defaults to `false`.

---

`@Input()`<br>`customErrs?: string[] | null`

**Description:**<br>
An array of custom errors messages. Defaults to `null`.

---
