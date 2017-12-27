import {ChangeDetectionStrategy, Component, forwardRef, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AtLayoutSidenavComponent} from "../at-layout-sidenav/at-layout-sidenav.component";

@Component({
    selector: 'at-layout-sidenav-left',
    templateUrl: './at-layout-sidenav-left.component.html',
    styleUrls: ['./at-layout-sidenav-left.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutSidenavLeftComponent implements OnInit {
    @Input() showAtScrollbar: boolean = true;
    @Input() test: string;

    constructor(@Inject(forwardRef(() => AtLayoutSidenavComponent)) private _parent: AtLayoutSidenavComponent) {

    }

    ngOnInit() {
        this._parent.layoutSideBarLeft = {
            mode: 'side',
            width: '200px',
            opened: true,
            mediaQuery: 'gt-sm',
            mediaClasses: ['at-sidenav-no-background'],
        };
        console.log(this.test);
        console.log(this._parent);
    }
}
