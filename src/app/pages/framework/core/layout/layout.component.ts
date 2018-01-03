import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as hljs from 'highlight.js/lib';

@Component({
    selector: 'app-blank',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

    overview: string;

    constructor() {
        this.fetch();
    }

    ngOnInit() {

    }

    fetch() {
        const req = new XMLHttpRequest();
        req.open('GET', `https://raw.githubusercontent.com/Teradata/covalent/v1.0.0-beta.4/src/platform/core/layout/README.md`);

        req.onload = () => {
            this.overview = req.response;

            setTimeout(() => {
                hljs.initHighlighting();
            }, 3000);

        };

        req.send();
    }


}
