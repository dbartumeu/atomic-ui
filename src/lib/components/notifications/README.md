## Atomic notifications
`at-notification-count` element renders a number of notifications.

### Setup
Import the [AtNotificationsModule] in your NgModule:

```typescript
import { AtNotificationsModule } from 'atomic-ui/components';
@NgModule({
  imports: [
    AtNotificationsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

### Count usage:

```html
<at-notification-count positionX="after" positionY="top" [notifications]="1">
    <mat-icon>notifications</mat-icon>
</at-notification-count>
```

### No count usage:

```html
<at-notification-count positionX="after" positionY="top" [notifications]="true">
    <mat-icon>notifications</mat-icon>
</at-notification-count>
```

### Stand alone count usage:

```html
<at-notification-count positionX="center" positionY="center" [notifications]="1">
</at-notification-count>
```
