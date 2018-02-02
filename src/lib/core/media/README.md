## Atomic Media Queries

A service designed to provide basic media query evaluation for responsive applications. And  a directive to modify 
elements depending on screen size.

### Setup
Import the `[AtMediaModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtMediaModule} from 'atomic-ui';
@NgModule({
  imports: [
    AtMediaModule,
    ...
  ],
  ...
})
export class MyModule {}
```

Then in your component<br>
**my.component.ts:**
```typescript
import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { AtMediaService } from '@atomic/core';
import { Subscription } from 'rxjs/Subscription';
...

export class Demo implements OnInit, OnDestroy {
  isSmallScreen: boolean = false;
  private _querySubscription: Subscription;

  constructor(private _mediaService: AtMediaService, private _ngZone: NgZone) {
  }

  checkScreen(): void {
    this._ngZone.run(() => {
      this.isSmallScreen = this._mediaService.query('sm'); // or '(min-width: 960px) and (max-width: 1279px)'
    });
  }

  watchScreen(): void {
    this._querySubscription = this._mediaService.registerQuery('sm').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        this.isSmallScreen = matches;
      });
    });
  }

  ngOnInit(): void {
    this.watchScreen();
  }

  ngOnDestroy(): void {
    this._querySubscription.unsubscribe();
  }
}
```

Always unsubscribe from Observable objects when not using them anymore. A good way of doing it is in the `ngOnDestroy` 
component life-cycle hook provided by the `OnDestroy` interface.


And in your template you can do something like this:<br>
**my.component.html:**
```html
<div *ngIf="isSmallScreen"
    <p>This screen is really small</p>
</div>
```


### Using the Directive
Alternatively you can use the `atMediaToggle` directive with a `"media query"` value:<br>
**my.component.html:**
```html
<div atMediaToggle="sm"
     [mediaClasses]="['classOne', 'classTwo']"
     [mediaAttributes]="{title: 'tooltip'}"
     [mediaStyles]="{color: 'red'}">
  ...
</div>
```
