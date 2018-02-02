## Atomic Search
A module that provides a search input and a search box for search and filter items.

### Setup
Import the `[AtSearch]` in your NgModule:<br>
**my.module.ts:**
```typescript
import {AtSearch} from 'atomic-ui';
@NgModule({
    imports: [
        AtSearch,
        ...
    ],
    ...
})
export class MyModule {}
```

## Search Input Usage

Just put `at-search-input` directive in your component template and provide the options:

**my.component.html**
```html
<at-search-input placeholder="Search here" 
                 [showUnderline]="true" 
                 [debounce]="500" 
                 (searchDebounce)="searchInputTerm = $event" 
                 (search)="searchInputTerm = $event" 
                 (clear)="searchInputTerm = ''">
</at-search-input>
```

## Search Box Usage

Just put `at-search-box` directive in your component template and provide the options:

**my.component.html**
```html
<at-search-box placeholder="Search here" 
               [showUnderline]="true" 
               [debounce]="500" 
               [alwaysVisible]="false" 
               (searchDebounce)="searchInputTerm = $event" 
               (search)="searchInputTerm = $event" 
               (clear)="searchInputTerm = ''">
</at-search-box>
```