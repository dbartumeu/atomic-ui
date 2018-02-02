## Atomic Scrollbar

`at-scrollbar` is a custom overlay-scrollbar component with native scrolling mechanism.

### Setup
Import the `[AtScrollbarModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtScrollbarModule} from 'atomic-ui';
@NgModule({
    imports: [
        AtScrollbarModule,
        ...
    ],
    ...
})
export class MyModule {}
```

Then in your template<br>
**my.component.html:**
```html
<at-scrollbar>
  <!-- Content -->
</at-scrollbar>
```

### Scrollbar functions
To use Scrollbar functions, you will need to get the component reference from the template. This can be done using the 
@ViewChild decortator, Example:
```typescript
@ViewChild(ScrollbarComponent) scrollRef: ScrollbarComponent;
```


### Dynamic scrolling example
Scroll to top directly from the template<br>
**my.component.html:**
```html
...
<ng-scrollbar #scrollRef>
  <!-- Content -->
</ng-scrollbar>
<button (click)="scrollRef.scrollYTo(0)">Scroll to top</button>
...
```

Or using the @ViewChild decorator<br>
**my.component.ts:**
```typescript
...
@ViewChild(ScrollbarComponent) scrollRef: ScrollbarComponent;

scrollToTop() {
   this.scrollRef.scrollYTo(0);
}
...
```
