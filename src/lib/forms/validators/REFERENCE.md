## API reference for Atomic Validators

### Static Members

#### required
`static required(msg?: string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have a non-empty value.

---

#### minLength
`static minLength(length: number, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have a value of a minimum length.

---

#### maxLength
`static maxLength(length: number, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have a value of a maximum length.

---

#### exactLength
`static exactLength (length: number, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have a value of an exact length.

---

#### rangeLength
`static exactLength (min: number, max: number, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have a value between a minimum and maximun length.

#### number
`static number(type: 'int' | 'unsignedInt' | 'float' = 'float', msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have a numerical value.

#### min
`static min(value: number, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls that have a minimun value.

---

#### max
`static max(value: number, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls that have a maximun value.

#### range
`static range(min: number, max: number, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have a value in a range.

---

#### alphanumeric
`static alphanumeric(allow: string | null = null, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to have an alphanumeric value. By default this validator only allows numbers and 
letters. Use allow parameter to add more characters.

---

#### url
`static alphanumeric(msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that performs url validation.

---

#### email
`static alphanumeric(msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that performs email validation.

---

#### exclude
`static exclude(characters: string | null = null, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to exclude certain characters.

---

#### include
`static include(characters: string | null = null, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires controls to include at least one characters.

---

#### matchOtherField
`static matchOtherField(otherFieldName: string, otherFieldLabel: string, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that check if current form field matches other field.

---

#### regExp
`static regExp(regexp: RegExp, msg?:string): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that requires a control to match a regex to its value.

---

#### custom
`static custom(fn: (formCtrl: FormControl) => (string | null)): {atValidatorsRequired: IAtValidatorError}|null`<br>
Validator that uses a custom function to check if FormControl is valid. Where fn is a function that returns an string 
if `formCtrl` is invalid and null otherwise.

---

## Additional classes

### IAtValidatorError
An interface that defines the error structure.

| Name             | Description                   |
| :--------------- | :---------------------------- |
| `type: string`   | The error type                |
| `valid: boolean` | If the field is valid or not. |
| `value: any`     | The field value               |
| `msg: string`    | The Error message             |