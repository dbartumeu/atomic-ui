## Atomic Loading

### Setup:
Import the [AtLoadingModule] in your NgModule:

**my.module.ts:**
```typescript
import {AtLoadingModule} from 'atomic-ui/components';
@NgModule({
  imports: [
    AtLoadingModule,
    ...
  ],
  ...
})
export class MyModule {}
```

Simply add the `atLoading` attribute with a "name" value to the element you want to mask.

Don't forget to add the * syntax before the `atLoading` directive if its not used in a `<ng-template>` element.

**my.component.html:**
```html
<div *atLoading="'stringName'; type:'circular'; mode:'indeterminate'; strategy:'replace'; color:'primary'">
  ...
</div>
```

Then in your component:

**my.component.ts:**
```typescript
import { AtLoadingService } from 'atomic-ui/components';
// ...

export class MyComponent {
  constructor(private _loadingService: AtLoadingService) {
    // ...
  }

  registerLoading(): void {
    this._loadingService.register('stringName');
  }

  resolveLoading(): void {
    this._loadingService.resolve('stringName');
  }
}
```
