import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'at-layout-footer',
    templateUrl: './at-layout-footer.component.html',
    styleUrls: ['./at-layout-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutFooterComponent {

    private _color: string;
    private _height: string = 'auto';

    @Input()
    set color(c: string) {
        this._color = c;
    }

    get color(): string {
        if (this._color) {
            return 'mat-bg-' + this._color;
        }

        return '';
    }

    @Input()
    set height(h: string) {
        this._height = h;
    }

    get height(): string {
        return this._height;
    }

    constructor() {

    }

}
