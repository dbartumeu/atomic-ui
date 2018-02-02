## Atomic Sidenav

Export a Service and a component to allow you to render teh main sidenav of your app.

### Setup
Import the `[AtSidenavModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtSidenavModule} from 'atomic-ui';
@NgModule({
    imports: [
        AtSidenavModule,
        ...
    ],
    ...
})
export class MyModule {}
```

In your routing module<br>
**my-routing.module.ts:**
```typescript
export const FEATURE_ROUTES: Routes = [
    {
        path: 'features',
        pathMatch: 'full',
        redirectTo: 'features/feature1',
        data: {
            atSidenavItem: {
                name: 'Features',
                icon: 'dashboard',
                position: 1,
                badge: 12,
                badgeColor: 'red',
                customClass: '',
            }
        }
    },
    {
        path: 'features/feature1',
        component: Feature1Component,
        data: {
            atSidenavItem: {
                name: 'feature1',
                position: 1,
                customClass: '',
            }
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(FEATURE_ROUTES)],
    exports: [RouterModule],
    entryComponents: [],
})

export class MyRoutingModule {

}
```

Then you have to create a component to render the sidenav Items. And call the method `buildMenuByRoutes` for build 
the menu items based on the routes data.<br>
**my.component.ts:**
```typescript

atSidenavItems: AtSidenavItem[] 

constructor(private atSidenavService: AtSidenavService, public router: Router) {
    if (this.avSidenavService.getAtSidenavItems().length == 0) {
        atSidenavService.buildMenuByRoutes(router.config);
    }
}

ngOnInit() {
    this.atSidenavItemsChange = 
        this.atSidenavService.atSidenavItemsChange
            .subscribe((atSidenavItems: AtSidenavItem[]) => {
                this.atSidenavItems = atSidenavItems;
            });
}
```

Finally you have to render the items in your template:
```html
<md-nav-list fxLayout="column" class="at-sidenav-list sidenav-toplevel">
    <at-sidenav-item *ngFor="let atSidenavItem of atSidenavItems" [item]="atSidenavItem"></at-sidenav-item>
</md-nav-list>
```

**Note:** this is the minimal workaround to render the sidenav. But much work is needed to get all the features. You can 
take a look at the blank project to get an idea and make your own implementation.