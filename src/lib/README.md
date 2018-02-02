Atomic Framework
================

An UI Platform for layouts, icons, custom components and themes. This should be added as a dependency for any project 
that wants to use layouts, icons and themes for Angular Material.

## Installation
This component can be installed as npm package.
```
npm i -save atomic-ui
```


##  Setup
Import the modules from atomic-ui/core, atomic-ui/forms or atomic-ui/components as needed in your NgModule:

```typescript
import { AtLayoutModule } from 'atomic-ui';
import { AtChips } from 'atomic-ui';

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
