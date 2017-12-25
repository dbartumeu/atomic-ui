import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'at-layout-basic',
    templateUrl: './at-layout-basic.component.html',
    styleUrls: ['./at-layout-basic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutBasicComponent {

    @Input() scrollOn: 'content' | 'container' = 'container';
    @Input() showAtScrollbar: boolean = true;

}
