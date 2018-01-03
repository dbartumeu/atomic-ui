import {Component, Input} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';

import {EXAMPLE_COMPONENTS, LiveExample} from '../../examples/example.module';

@Component({
    selector: 'example-viewer',
    templateUrl: './example-viewer.component.html',
    styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViewerComponent {
    /** Component portal for the currently displayed example. */
    selectedPortal: ComponentPortal<any>;

    /** String key of the currently displayed example. */
    _example: string;

    exampleData: LiveExample;

    get example() {
        return this._example;
    }

    @Input()
    set example(example: string) {
        if (example && EXAMPLE_COMPONENTS[example]) {
            this._example = example;
            this.exampleData = EXAMPLE_COMPONENTS[example];
            this.selectedPortal = new ComponentPortal(this.exampleData.component);
        } else {
            console.log('MISSING EXAMPLE: ', example);
        }
    }
}
