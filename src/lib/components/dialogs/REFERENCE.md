## API reference for Atomic Dialogs

### Services

#### Atomic Dialog Service
**Exported as:** AtDialogService<br>

##### Properties

`openAlert: function(IAlertConfig): MatDialogRef<TdAlertDialogComponent>`<br>
**Description:**<br>
Opens an alert dialog with the provided config.

---

`openConfirm: function(IConfirmConfig): MatDialogRef<TdConfirmDialogComponent>`<br>
**Description:**<br>
Opens a confirm dialog with the provided config.

---

`openPrompt: function(IPromptConfig): MatDialogRef<TdPromptDialogComponent>`<br>

**Description:**<br>
Opens a confirm dialog with the provided config.

---

`open: function<T>(component: ComponentType<T>, config: MatDialogConfig): MatDialogRef<T>`<br>

**Description:**<br>
Wrapper function over the `open()` method in MatDialog. Opens a modal dialog containing the given component.

---

`closeAll: function()`<br>

**Description:**<br>
Wrapper function over the `closeAll()` method in MatDialog. Closes all of the `currently-open` dialogs.

---

### Additional classes

#### IAlertConfig
`IAlertConfig extends MatDialogConfig`

**Description:**<br>
Configuration for opening an alert dialog with the MatDialog service. For more information about MatDialogConfig 
[here](https://material.angular.io/components/dialog/api)

**Properties:**<br>

| Name                      | Description                    |
| ------------------------- | ------------------------------ |
|`title?: string;`          | Alert dialog Title             |
|`message: string;`         | Alert dialog Message           |
|`closeButton?: string;`    | Alert dialog Close Button text |

#### IPromptConfig
`IPromptConfig extends MatDialogConfig`

**Description:**<br>
Configuration for opening a prompt dialog with the MatDialog service. For more information about MatDialogConfig 
[here](https://material.angular.io/components/dialog/api)

**Properties:**<br>

| Name                      | Description               |
| ------------------------- | ------------------------- |
|`title?: string;`          | Prompt dialog Title        |
|`message: string;`         | Prompt dialog Message      |
|`value?: string;`          | Prompt dialog Close Button |

#### IConfirmConfig
`IConfirmConfig extends MatDialogConfig`

**Description:**<br>
Configuration for opening a confirm dialog with the MatDialog service. For more information about MatDialogConfig 
[here](https://material.angular.io/components/dialog/api)

**Properties:**<br>

| Name                      | Description                       |
| ------------------------- | --------------------------------- |
|`title?: string;`          | Confirm dialog title              |
|`message: string;`         | Confirm dialog Message            |
|`acceptButton?: string;`   | Confirm dialog Accept Button text |
|`cancelButton?: string;`   | Confirm dialog Cancel Button text |
