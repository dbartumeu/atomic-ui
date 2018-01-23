import {Component} from '@angular/core';
import {AtIconService} from 'ngx-atomic/core';
import * as _ from 'lodash';

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html'
})
export class IconComponent {
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
