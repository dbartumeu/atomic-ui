import {Component} from '@angular/core';
import {AtIconService} from 'atomic-ui';
import * as _ from 'lodash';

@Component({
    selector: 'icons',
    templateUrl: './icons.component.html'
})
export class IconsComponent {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    randomIcons: string[] = [];
    mdIcons: any;

    constructor(private mdIconsService: AtIconService) {
        this.mdIcons = this.mdIconsService.icons;

        for (let i = 0; i < 26; i++) {
            this.randomIcons.push(this.mdIcons[_.random(0, this.mdIcons.length - 1)]);
        }
    }
}
