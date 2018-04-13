import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {AtColorService, AtColor} from '../../core/common/services/color.service';

@Component({
    selector: 'at-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtIconComponent implements OnInit, OnChanges {

    /**
     * display?: "mat-icon" | "mat-letter"
     * "mat-icon" renders a mat-icon, "mat-letter" renders the first letter of the property name
     */
    @Input() display: 'mat-icon' | 'mat-letter' = 'mat-icon';

    /**
     * name: string
     *
     * The AtIcon name. It will be a mat-icon | string. Defaults to ''
     */
    @Input() name: string = '';

    /**
     * color: 'auto' | AtColor
     *
     * The AtIcon color. Defaults to 'auto'
     */
    @Input() color: 'auto' | AtColor = 'auto';

    /**
     * background: 'none' | 'auto' | AtColor
     *
     * The AtIcon background color. Defaults to 'none'
     */
    @Input() background: 'none' | 'auto' | AtColor = 'none';

    /**
     * border: string | null
     *
     * Sets the border width. Use any valid border width string ex: '10px'. Defaults to null
     */
    @Input() border: string;

    /**
     * radius: string | null
     *
     * Sets the border radius. Use any valid border radius string ex: '10px'. Defaults to '30px'
     */
    @Input() radius: string = '30px';

    /**
     * size?: string
     * Sets the outer size of the icon. Defaults to "30px"
     */
    @Input() size = '30px';

    /**
     * fontSize?: string
     * Sets the Icon font size. Defaults to "24px"
     */
    @Input() fontSize: string = '24px';

    /**
     * @internal use only
     * @display {{name: string; iconClass: string; backgroundClass: string}}
     */
    atIcon = {
        name: '',
        iconClass: '',
        backgroundClass: ''
    };

    /**
     * @internal use only
     */
    @ViewChild('AtIconContent') atIconContent;

    constructor(private atColor: AtColorService) {
    }

    private getIconColor(iconText) {
        let iconClass;
        let bgColorClass = '';
        let fgColorClass = '';
        let bColorClass = '';

        if (this.display === 'mat-letter') {
            if (iconText) {
                let iconArr = iconText.trim().split(' ');
                iconArr = iconArr.lenght > 2 ? iconArr.slice(1) : iconArr;
                this.atIcon.name = '';
                iconArr.forEach(iText => {
                    const letterId = iText.toUpperCase().charCodeAt(0);
                    this.atIcon.name += String.fromCharCode(letterId);
                });
            }
        } else {
            if (iconText) {
                this.atIcon.name = iconText;
            }
        }

        if (this.background !== 'none') {
            if (this.background === 'auto') {
                const c = this.atColor.getUniqueColor(iconText);
                bgColorClass = 'mat-bg-' + c;
                if (this.border) {
                    bColorClass = 'mat-b-' + c;
                }
            } else {
                bgColorClass = 'mat-bg-' + this.background;
                if (this.border) {
                    bColorClass = 'mat-b-' + this.background;
                }
            }

            if (this.color !== 'auto') {
                fgColorClass = 'mat-fg-' + this.color;
            }

        } else {
            if (this.color !== 'auto') {
                fgColorClass = 'mat-fg-' + this.color;
            } else {
                fgColorClass = 'mat-fg-' + this.atColor.getUniqueColor(iconText);
            }
        }

        iconClass = (bgColorClass + ' ' + fgColorClass + ' ' + bColorClass).trim();

        this.atIcon.iconClass = iconClass;
        return iconClass;

    }

    private render(iconText) {
        this.getIconColor(iconText);
    }

    ngOnInit() {
        if (!this.name && !this.atIconContent.nativeElement.innerText) {
            throw Error('Invalid Property: AtIcon name is required');
        }
        let iconText = this.name || this.atIconContent.nativeElement.innerText;
        this.render(iconText.trim());
    }

    ngOnChanges(changes: SimpleChanges) {
        let iconText = this.name || this.atIconContent.nativeElement.innerText;
        this.render(iconText.trim());
    }

}
