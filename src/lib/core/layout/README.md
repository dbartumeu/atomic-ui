## Atomic Layout

`at-layout` element renders a content container with a left, right or
both sidebars and 3 types of views: main, simple or carded.

### Setup
Import the `[AtLayoutModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtLayoutModule} from 'atomic-ui';
@NgModule({
    imports: [
        AtLayoutModule,
        ...
    ],
    ...
})
export class MyModule {}
```

Then in your template<br>
**my.component.html:**
```html
<at-layout>
  <at-layout-header color="yellow-800" height="200px" pattern="1">
      <div class="at-p-40">
          the header
      </div>
  </at-layout-header>
  <at-layout-content>
        <div class="at-p-40">
            the content
        </div>
  </at-layout-content>
  <at-layout-footer color="grey-800">
        <div class="at-p-40">
            the footer
        </div>
  </at-layout-footer>
</at-layout>
```

### Layout functions
To use Layout functions, you will need to get the component reference from the template. This can be done using the 
@ViewChild decortator, Example:
```typescript
@ViewChild(AtLayoutComponent) layoutRef: AtLayoutComponent;
```


### Toggling sidebars
Toggle sidebars directly from the template<br>
**my.component.html:**
```html
<at-layout #layoutRef>
  <at-layout-header color="yellow-800" height="200px" pattern="1">
      <div class="at-p-40">
          the header
      </div>
  </at-layout-header>
  <at-layout-sidebar-left>
        the left sidebar
  </at-layout-sidebar-left>
  <at-layout-content>
        <div class="at-p-40">
            the content
            <button (click)="layoutRef.toggleSideBarLeft()">Toggle Left sidebar</button>
        </div>
  </at-layout-content>
  <at-layout-footer color="grey-800">
        <div class="at-p-40">
            the footer
        </div>
  </at-layout-footer>
</at-layout>
```

Or using the @ViewChild decorator<br>
**my.component.ts:**
```typescript
...
@ViewChild(AtLayoutComponent) layoutRef: AtLayoutComponent;

toggleLeftSidebar() {
   this.layoutRef.toggleSideBarLeft();
}
...
```


### Nested Layouts
Just put an `<at-layout>` directive inside another.
```html
<at-layout #layoutRef type="cardOver">
  <at-layout-header color="yellow-800" height="200px" pattern="1">
      <div class="at-p-40">
        the header
      </div>
  </at-layout-header>
  <at-layout-sidebar-left>
    the left sidebar
  </at-layout-sidebar-left>
  <at-layout-content>
        <div class="at-p-40">
            <at-layout #nestedLayoutRef type="cardOver">
                <at-layout-content>
                    <div class="at-p-40">
                        Nested content
                    </div>
                </at-layout-content>
            </at-layout>
        </div>
  </at-layout-content>
  <at-layout-footer color="grey-800">
        <div class="at-p-40">
            the footer
        </div>
  </at-layout-footer>
</at-layout>
```