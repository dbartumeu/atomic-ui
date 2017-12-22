import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'at-layout-basic',
    templateUrl: './at-layout-basic.html',
    styleUrls: ['./at-layout-basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutBasicComponent {

    constructor() {
    }

}
