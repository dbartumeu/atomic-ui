import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'at-layout-sidenav',
    templateUrl: './at-layout-sidenav.component.html',
    styleUrls: ['./at-layout-sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutSidenavComponent {

    @Input() scrollOn: 'content' | 'container' = 'container';
    @Input() showAtScrollbar: boolean = true;


    public layoutSideBarLeft: any;

}
