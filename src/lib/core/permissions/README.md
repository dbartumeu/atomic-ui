## Atomic Permissions
A service designed to manage a set of permissions and a directive to show and hide dom elements based on those 
permissions. Also provide a permission guard service to allow or restrict the access to certain routes.

### Setup
Import the `[AtPermissionsModule]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtPermissionsModule} from 'atomic-ui';
@NgModule({
  imports: [
    AtPermissionsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

### Permissions Management
First of all you have to register the permission.

**my.component.ts:**
```typescript
import { AtPermissionsService } from '@atomic/core';

...

@Component({
    selector: 'app-my-component',
    templateUrl: './my.component.html'
})
export class MyComponent {
    constructor(private atPermissionService: AtPermissionsService) { 
        this.atPermissionService.register(['ViewUsers', 'CreateUser', 'EditUser', 'DeleteUser']);
    }
}
```

If you need to add more permissions you can use the `add` method:
```typescript
...
export class MyComponent {
    ...
    
    addPermission() { 
        this.atPermissionService.add('UserDetails');
    }
}
```

### Display Control in views
Just add `atPermsAllowed` directive to an element and pass to it the desired permission:

**my.component.html**
```html
<button mat-button [atPermsAllowed]="['DeleteUser']">Delete</button>
```

Or a set of permissions separated by 'coma':

**my.component.html**
```html
<button mat-button [atPermsAllowed]="['DeleteUser', 'EditUser']">Delete</button>
```

Or if you prefer add `atPermsDenied` to allow all user access except `'GuestUser'`:

**my.component.html**

```html
<button mat-button [atPermsDenied]="['GuestUser']">Delete</button>
```

### Custom behavior
By default `atPermsAllowed` or `atPermsDenied` directives manipulating DOM elements style by adding or removing display: 
none or display: inherit. But `AtPermissions` module exposes additional strategies or custom functions to customize the 
way elements are being rendered or decorated. Ex:

**my.component.html**
```html
<button mat-button 
        [atPermsAllowed]="['GuestUser']"
        atOnAuthPermission="enable"
        atOnUnauthPermission="disable">Delete</button>
```

Or you can provide a custom function defined inside component or link function that will be invoked based on 
authorization results:

**my.component.ts**
```typescript
...
export class MyComponent {
    ...
    
    OnAuthorizedPermission(element: ElementRef) {
        element.nativeElement.style.visibility ="inherit";
    }
    
    OnUnauthorizedPermission(element: ElementRef) {
        element.nativeElement.style.visibility = "hidden";    
    }
}
```

Then in the view you can call the functions previously created:
**my.component.html**
```html
<button mat-button 
        [atPermsAllowed]="['CreateUser']"
        [atOnAuthPermission]="OnAuthorizedPermission"
        [atOnUnauthPermission]="OnUnauthorizedPermission">Delete</button>
```

### Access control in Routes
You can use `AtPermissionGuard` to protecting routes based on a set of permissions. Ex:

**app-routing.module.ts**
```typescript
import { AtPermissionsGuard, IAtPermissionsGuard } from '@atomic/core';

const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
        canActivate: [AtPermissionsGuard],
        data: {
            atPermissions: {
                deny: ['GuestUser'],
                redirectTo: '403'
            } as IAtPermissionsGuard
        },
        children: []
    },
    {
        path: 'users/create',
        component: UserCreateComponent,
        canActivate: [PermissionGuard],
        data: {
            atPermissions: {
                allow: ['CreateUser'],
                redirectTo: '403'
            } as IAtPermissionsGuard
        },
        children: []
    },
    {
        path: '403',
        component: AccessDeniedComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
```