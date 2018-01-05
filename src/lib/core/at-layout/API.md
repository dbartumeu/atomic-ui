## API Summary

### Properties
| Name                             | Possible Values | Description |
| :------------------------------- | :------------------------------------------------ | :------------------------------------------------------------------------------- |
| @Input()<br>`layoutType?:string` | <code>["main"&#124;"simple"&#124;"carded"]</code> | Sets the type of the Layout component. Defaults to "simple" |
| @Input()<br>`scrollOn?:string`   | <code>["content"&#124;"container"]</code> | Sets where the scroll will be positioned inside the Layout component. If scrollOn = "content" the header is fixed and the scroll is placed above the header. Defaults to "container" header and content can be scrolled. |

### Methods
| Name                   | Description |
| :--------------------- | :----------------------------------------------------------- |
| `toggleSideNav()`      | Open or close the Main sidenav in Main Layout. |
| `toggleSidePanel()`    | Open or close the side panel in Main Layout. |
| `toggleSideBarLeft()`  | Open or close the left sidebar in simple or carded layouts. |
| `toggleSideBarRight()` | Open or close the right sidebar in simple or carded layouts. |




