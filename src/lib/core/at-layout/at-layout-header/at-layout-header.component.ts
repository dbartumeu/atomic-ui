import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'at-layout-header',
    templateUrl: './at-layout-header.html',
    styleUrls: ['./at-layout-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutHeaderComponent {

    private _color;

    @Input()
    set color(c) {
        this._color = c;
    }

    get color(){
        return 'mat-bg'
    }

    constructor() {

    }

}
