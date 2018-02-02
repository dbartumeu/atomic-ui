## Atomic Icons

A directive for render a md-icon or a letter with a border or colored background.

### Setup
Import the `[AtIconModule ]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtIconModule } from 'atomic-ui/components';
@NgModule({
    imports: [
        AtIconModule ,
        ...
    ],
    ...
})
export class MyModule {}
```

### Usage
Just add the directive wherever you want into your html.

#### Renders a material design icon
```html
<at-icon display="mat-icon">dashboard</at-icon>
```


#### Renders a 'T' icon with a red border
```html
<at-icon display="mat-letter" color="red" border="1px">test</at-icon>
```

#### Use property name inside *ngFor loops
```html
<at-icon *ngFor="let letter of alphabet" class="at-m-5"
         [name]="letter"
         [display]="'mat-letter'"
         [size]="'80px'"
         [fontSize]="'30px'">
</at-icon>
```