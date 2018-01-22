import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'at-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtIconComponent implements OnInit, OnChanges {

    /**
     * type?: "mdicon" | "letter"
     * "mdicon" renders a md-icon, "letter" renders the first letter of the name property
     */
    @Input() type: 'mdicon' | 'letter' = 'mdicon';

    /**
     * name: string
     *
     * The AtIcon name. It will be a md-icon | string. Defaults to ''
     *
     * Note: If you choose [type]="mdicon" and pass a random string no Icon will be displayed.
     * Instead if you choose [type]="letter" and you pass a valid md-icon string the output will be the first letter.
     */
    @Input() name: string = '';

    /**
     * backgroundType?: 'none' | 'solid' | 'border'
     *
     * backgroundType = "none": Icon or Letter will have a color determined by backgroundColor property.
     *
     * backgroundType = "solid": Icon or Letter will have a white font color with a circular background color
     * determined by backgroundColor property.
     *
     * backgroundType = "border": Icon or Letter will have a border, icon and border colors will be determined
     * by backgroundColor property.
     *
     * Defaults to "none"
     */
    @Input() backgroundType: 'none' | 'solid' | 'border' = 'none';

    /**
     * backgroundColor?: 'none' | 'auto' | 'red' | 'pink' | 'purple' | 'yellow' | 'indigo' | 'blue' | 'light-blue' |
     *                   'cyan' | 'teal' | 'green' | 'light-green' | 'orange' | 'blue-grey'
     *
     * backgroundColor = "none": Letter or md-icon color is inherited from his parent
     *
     * backgroundColor = "auto": If type property is 'letter' one color is assigned to each letter.
     * If type is 'mdicon' a random color is assigned to each icon.
     *
     * Defaults to "auto"
     */
    @Input() backgroundColor: 'none' | 'auto' | 'red' | 'pink' | 'purple' | 'yellow' | 'indigo' | 'blue' |
        'light-blue' | 'cyan' | 'teal' | 'green' | 'light-green' | 'orange' | 'blue-grey' = 'auto';

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

    private materialColors = [
        'at-icon-red',
        'at-icon-pink',
        'at-icon-purple',
        'at-icon-yellow',
        'at-icon-indigo',
        'at-icon-blue',
        'at-icon-light-blue',
        'at-icon-cyan',
        'at-icon-teal',
        'at-icon-green',
        'at-icon-light-green',
        'at-icon-orange',
        'at-icon-blue-grey'
    ];

    /**
     * @internal use only
     * @type {{name: string; iconClass: string; backgroundClass: string}}
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

    constructor() {
    }

    private getIconColor(iconText) {
        let iconColor = '';

        if (this.type == 'letter') {
            if (iconText) {
                const letterId = iconText.toUpperCase().charCodeAt(0);
                this.atIcon.name = String.fromCharCode(letterId);
                if (this.backgroundColor == 'auto') {
                    if (letterId >= 65 && letterId <= 90) {
                        let i = letterId - 65;
                        if (i <= 25) {
                            if (i <= 12) {
                                iconColor = this.materialColors[i]
                            } else {
                                iconColor = this.materialColors[i - 13]
                            }
                        } else {
                            iconColor = this.materialColors[12]
                        }
                    } else if (letterId >= 48 && letterId <= 61) {
                        let i = letterId - 48;
                        iconColor = this.materialColors[i]
                    } else {
                        iconColor = this.materialColors[12]
                    }
                } else {
                    iconColor = 'at-icon-' + this.backgroundColor;
                }
            }
        } else {
            if (iconText) {
                this.atIcon.name = iconText;
                if (this.backgroundColor == 'auto') {
                    iconColor = this.materialColors[_.random(1, this.materialColors.length) - 1]
                } else {
                    iconColor = 'at-icon-' + this.backgroundColor;
                }
            }
        }

        this.atIcon.iconClass = iconColor;
        return iconColor;

    }

    private getBackgroundType() {
        this.atIcon.backgroundClass =
            (!this.backgroundType || this.backgroundType == 'none') ? '' : 'at-icon-background-' + this.backgroundType;
        return this.atIcon.backgroundClass;
    }

    private render(iconText) {
        this.getBackgroundType();
        this.getIconColor(iconText);
    }

    ngOnInit() {
        if (!this.name && !this.atIconContent.nativeElement.innerText) {
            throw Error('Invalid Property: AtIcon name is required');
        }
        let iconText = this.name || this.atIconContent.nativeElement.innerText;
        this.render(iconText);
    }

    ngOnChanges(changes: SimpleChanges) {

        let iconText = this.name || this.atIconContent.nativeElement.innerText;
        this.render(iconText);
    }

}
