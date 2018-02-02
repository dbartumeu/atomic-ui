## Atomic Validators
Provides a set of validators used by form controls.

A validator is a function that processes a FormControl or collection of controls and returns a map of errors. A null 
map means that validation has passed.

## Usage
```typescript
import { AtValidators } from 'atomic-ui';

// ...

let loginControl = new FormControl('', AtValidators.required('Error message'))
```

## Error messages

Each validators supports custom messages and each message can be a string or a template you can replace the following 
patterns in templates messages:

| Name            | Description |
| :-------------- | :---------- |
| %fieldLabel%    | Will be replaced by the field label provided in **at-form-field** component |
| %fieldValue%    | Will be replaced by the field value |
| %functionParam% | Will be replaced by the function param value |

### Ex:

Consider this method from `AtValidators`:

```typesctipt
static minLength(length, msg?:string)
```

You can use %length% as replacement pattern in your error message:
```typesctipt
let loginControl = new FormControl('', AtValidators.minLength(12, 'Min length must be %length% characters'))
```

