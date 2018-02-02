## Atomic Form Field Box

A wrapper for `mat-form-field`. Provide a "label" to display before the input fields if you want to use horizontal forms.
And automatically display Atomic Error messages.

### Setup
Import the `[AtFormFieldBoxModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtFormFieldBoxModule} from 'atomic-ui';
@NgModule({
    imports: [
        AtFormFieldBoxModule,
        ...
    ],
    ...
})
export class MyModule {}
```

### Usage
Example for HTML usage:

```html
<form [formGroup]="form" novalidate>
    ...
    <at-form-field-box label="Required" [showLabel]="false" [field]="form.get('required')" [required]="true">
        <mat-form-field>
            <input matInput placeholder="Required"
                   [formControl]="form.get('required')">
        </mat-form-field>
    </at-form-field-box>
</form>
```
