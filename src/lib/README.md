Atomic Framework
================

An UI Platform for layouts, icons, custom components and themes. This should be added as a dependency for any project 
that wants to use layouts, icons and themes for Angular Material.

## Installation
This component can be installed as npm package.
```
npm i -save ngx-atomic
```


##  Setup
Import the modules from ngx-atomic/core, ngx-atomic/forms or ngx-atomic/components as needed in your NgModule:

```typescript
import { AtLayoutModule } from 'ngx-atomic/core';
import { AtChips } from 'ngx-atomic/forms';

@NgModule({
  imports: [
    AtLayoutModule,
    AtChips,
    ...
  ],
  ...
})
export class MyModule {}
```
