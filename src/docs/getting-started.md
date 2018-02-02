## Step 1: Install the CLI.
```
npm install -g @angular/cli@latest
```

## Step 2: Create a new project.
```
ng new my-project
```

The new command creates a project with a build system for your Angular app.

## Step 3: Install Atomic dependencies.
Install Angular Material, Angular CDK, Angular Flexbox and Lodash 
```
npm install --save @angular/material @angular/cdk @angular/flex-layout lodash
```

**package.json**
```json
...

"dependencies": {
  ...
    "@angular/animations": "^5.1.2",
    "@angular/common": "^5.2.1",
    "@angular/core": "^5.2.1",
    "@angular/forms": "^5.2.1",
    "@angular/router": "^5.2.1",
    "@angular/cdk": "^5.1.0",
    "@angular/material": "^5.1.0",
    "@angular/flex-layout": "^2.0.0-beta.12",
    "lodash": "^4.17.4"
  ...
}

...
```

For more information about how to get started with Angular Material, check out the [Angular Material getting started guide](https://material.angular.io/guide/getting-started)

## Step 4: Install Atomic.
Atomic  is available as an npm package.
```
npm install --save atomic-ui
```

## Step 5: Import the Atomic Core NgModule.
```typescript
import { AtomicLayoutModule, AtomicScrollbarModule /*, any other modules */ } from 'atomic-ui';

@NgModule({
  imports: [
    AtomicLayoutModule,
    AtomicScrollbarModule,
  ],
  ...
})
export class AppModule { }
```

## Step 6: Include the core, theme and typography:
This is **required** to apply all of the core, theme and typography styles to your application.

See the [material theming guide](https://github.com/angular/material2/blob/master/guides/theming.md) and the 
[material typography guide](https://github.com/angular/material2/blob/master/guides/typography.md) for instructions.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding 
styles. A typical theme file will look something like this:

```scss
@import '~@angular/material/_theming';
@include mat-core();

@import "~atomic-ui/core/at-styles/helpers";
@import "~atomic-ui/core/at-styles/theming";

// Define the default theme.
$default-primary: mat-palette($mat-indigo);
$default-accent: mat-palette($mat-pink, A200, A100, A400);
$default-theme: mat-light-theme($default-primary, $default-accent);

// Include the default theme styles.
@include angular-material-theme($default-theme);

// This design depends on the selection of the material colors palette
.at-sidenat-button.active {
  color: map-get($default-primary, 400) !important;
}

@include atomic-theme($theme);

```

You only need this single Sass file; you do not need to use Sass to style the rest of your app.