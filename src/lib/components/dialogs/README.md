## Atomic Dialogs

AtDialogsModule exports the `AtDialogService` provided with methods that wrap the `@angular/material MdDialog` service
and give you an easier experience for simple dialogs.

### Setup
Import the `[AtDialogsModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtDialogsModule} from 'atomic-ui/components';
@NgModule({
    imports: [
        AtDialogsModule,
        ...
    ],
    ...
})
export class MyModule {}
```

After that, inject `AtDialogService` in your component and use it for your dialogs.
**my.component.ts:**
```typescript
import { ViewContainerRef } from '@angular/core';
import { AtDialogService } from 'atomic-ui/components';
// ...

export class MyComponent {
    constructor( private _dialogService: AtDialogService, private _viewContainerRef: ViewContainerRef) {
        // ...
    }
}
```

### Alerts
**my.component.ts:**
```typescript
// ...

openAlert(): void {
    this._dialogService.openAlert({
        message: 'Alert Message',
        disableClose: true,                         // Defaults to false
        viewContainerRef: this._viewContainerRef,   // Optional
        title: 'Alert Title',                       // Optional, hides if not provided
        closeButton: 'Ok',                          // Optional, defaults to 'Close'
    });
}

// ...
```

### Confirms
**my.component.ts:**
```typescript
// ...

openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'Confirm message',
      disableClose: true,                       // Defaults to false
      viewContainerRef: this._viewContainerRef, // Optional
      title: 'Confirm',                         // Optional, hides if not provided
      cancelButton: 'Disagree',                 // Optional, defaults to 'Cancel'
      acceptButton: 'Agree',                    // Optional, defaults to 'Accept'
    }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
            // DO SOMETHING
        } else {
            // DO SOMETHING ELSE
        }
    });
}

// ...
```

### Prompts
**my.component.ts:**
```typescript
// ...

openPrompt(): void {
    this._dialogService.openPrompt({
        message: 'Prompt something.',
        disableClose: true,                         // Defaults to false
        viewContainerRef: this._viewContainerRef,   // Optional
        title: 'Prompt',                            // Optional, hides if not provided
        value: 'Prepopulated value',                // Optional
        cancelButton: 'Cancel',                     // Optional, defaults to 'Cancel'
        acceptButton: 'Ok',                         // Optional, defaults to 'Accept'
    }).afterClosed().subscribe((newValue: string) => {
        if (newValue) {
            // DO SOMETHING
        } else {
            // DO SOMETHING ELSE
        }
    });
}

// ...
```

