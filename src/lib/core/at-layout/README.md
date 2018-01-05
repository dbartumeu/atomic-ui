## Atomic Layout

`at-layout` element renders a content container with a left, right or
both sidebars and 3 types of views: main, simple or carded.

### Setup
Import the `[AtLayoutModule]` in your NgModule:

**my.module.ts:**
```typescript
import {AtLayoutModule} from '@atomic/core';
@NgModule({
    imports: [
        AtLayoutModule,
        ...
    ],
    ...
})
export class MyModule {}
```

