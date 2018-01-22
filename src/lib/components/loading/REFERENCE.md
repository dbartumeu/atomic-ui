## API reference for Atomic Loading

### Services

#### Atomic Loading Service
**Exported as:** AtDialogService<br>

##### Properties

`register: function(name?: string, registers: number = 1)`<br>
**Description:**<br>
Registers a request for the loading mask referenced by the name parameter. Can optionally pass registers argument to 
set a number of register calls. If no parameters are used, then default main mask will be used. 

---

`resolve: function(name?: string, resolves: number = 1)`<br>
**Description:**<br>
Resolves a request for the loading mask referenced by the name parameter. Can optionally pass resolves argument to set 
a number of resolve calls. If no parameters are used, then default main mask will be used. 

---

`resolveAll: function(name?: string)`<br>
**Description:**<br>
Resolves all requests for the loading mask referenced by the name parameter. If no parameters are used, then default 
main mask will be used. 

---

`create: function(options: ITdLoadingConfig)`<br>
**Description:**<br>
Creates a fullscreen loading mask and attaches it to the DOM with the given configuration. Only displayed when the mask 
has a request registered on it. 

---

### Directives

#### Atomic Loading Directive
**Selector:** atLoading<br>
**Exported as:** AtLoadingDirective<br>

##### Properties

`@Input()`<br>
`atLoading: string`<br>

**Description:**<br>
Name reference of the loading mask, used to register/resolve requests to the mask.

---

`@Input()`<br>
`atLoadingType?: LoadingType | 'linear' | 'circular'`<br>

**Description:**<br>
 Sets the type of loading mask depending on value. Defaults to `'circular'`.

---

`@Input()`<br>
`atLoadingMode?: LoadingMode | 'determinate' | 'indeterminate'`<br>

**Description:**<br>
Sets the mode of loading mask depending on value. Defaults to `'indeterminate'`. 

---

`@Input()`<br>
`atLoadingStrategy?: LoadingStrategy | 'replace' | 'overlay'`<br>

**Description:**<br>
Sets the strategy of loading mask depending on value. Defaults to `'replace'`. 

---

`@Input()`<br>
`atLoadingColor?: 'primary' | 'accent' | 'warn'`<br>

**Description:**<br>
Sets the theme color of the loading component. Defaults to `'primary'`.

---

`@Input()`<br>
`atLoadingUtil?: any`<br>

**Description:**<br>
If its `null`, `undefined` or `false` it will be used to register requests to the mask. Else if its any value that can 
be resolved as `true`, it will resolve the mask.

---