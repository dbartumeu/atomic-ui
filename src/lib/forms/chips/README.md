## Atomic Chips

`at-chips` element generates a list of strings or objects as chips. You can use this component as a tag, name or even 
a city selector.

### Setup
Import the `[AtChipsModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtChipsModule} from 'atomic-ui';
@NgModule({
    imports: [
        AtChipsModule,
        ...
    ],
    ...
})
export class MyModule {}
```

Add the [items] attribute to enable the autocomplete with a list, and [requireMatch] to not allow custom values.

Leverage the templates to create your own chip or contact chip.

### Usage
Example for HTML usage:

```html
<at-chips placeholder="placeholder"
          color="primary"
          [items]="items"
          [inputPosition]="'before'"
          [(ngModel)]="model"
          [disabled]="disabled" 
          [chipAddition]="chipAddition"
          [chipRemoval]="chipRemoval"
          (add)="addEvent($event)"
          (remove)="removeEvent($event)"
          (chipBlur)="handleChipBlur($event)"
          (chipFocus)="handleChipFocus($event)"
          (inputChange)="inputChange($event)"
          requireMatch
          stacked>
  <ng-template at-chip let-chip="chip">
    <div at-chip-avatar>A</div> {{chip}}
  </ng-template>
  <ng-template at-autocomplete-option let-option="option">
    {{option}}
  </ng-template>
  // anything below it
</at-chips>  
```
