## API reference for Atomic Chips

### Directives

#### Atomic Chips
Renders a layout object, wrapper for layout object components.<br>
**Selector:** at-chips<br>
**Exported as:** AtChipsComponent<br>

##### Properties

| Name                                                  | Description                                                                                                    |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `@Input()`<br>`color?: 'primary', 'accent' or 'warn'` | Color for the input and focus state of the chips. Defaults to 'primary'                                        |
| `@Input()`<br>`items?: any[]`                         | Renders the `mat-autocomplete` with the provided list to display as options.                                   |
| `@Input()`<br>`requireMatch?: boolean`                | Blocks custom inputs and only allows selections from the autocomplete list.                                    |
| `@Input()`<br>`stacked?: boolean`                     | Set stacked or horizontal chips depending on value. Defaults to false.                                         |
| `@Input()`<br>`inputPosition?: 'before' or 'after'`   | Set input position before or after the chips. Defaults to 'after'.                                             |
| `@Input()`<br>`placeholder?: string`                  | Placeholder for the autocomplete input.                                                                        |
| `@Input()`<br>`disabled?: boolean`                    | Sets disabled state and disabled addition/removal of chips.                                                    |
| `@Input()`<br>`chipAddition: boolean`                 | Disables the ability to add chips. If setting disabled is true, this will be overriden. Defaults to `true`.    |
| `@Input()`<br>`chipRemoval: boolean`                  | Disables the ability to remove chips. If setting disabled is true, this will be overriden. Defaults to `true`. |
| `@Input()`<br>`debounce: string`                      | Debounce timeout between keypresses. Defaults to 200.                                                          |
| `@Output()`<br>`add()?: EventEmitter<any>`            | Method to be executed when a chip is added. Sends chip value as event.                                         |
| `@Output()`<br>`remove()?: EventEmitter<any>`         | Method to be executed when a chip is removed. Sends chip value as event.                                       |
| `@Output()`<br>`chipBlur()?: EventEmitter<string>`    | Method to be executed when a chip is blurred. Sends chip value as event.                                       |
| `@Output()`<br>`chipFocus()?: EventEmitter<any>`      | Method to be executed when a chip is focused. Sends chip value as event.                                       |
| `@Output()`<br>`inputChange()?: EventEmitter<any>`    | Method to be executed when the value in the autocomplete input changes. Sends string value as event.           |
