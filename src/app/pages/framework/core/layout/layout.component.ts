import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import * as hljs from 'highlight.js/lib';


@Component({
    selector: 'app-blank',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

    overview: string;
    api: string;

    coreUrl = 'https://raw.githubusercontent.com/dbartumeu/atomic/master/src/lib/core';
    module = 'at-layout';

    overviewRendered = false;
    apiRendered = false;

    constructor(public http: HttpClient) {
        this.getData('at-layout', 'README');
        this.getData('at-layout', 'API');
    }

    ngOnInit() {

    }


    selectedTabChange(e) {
        console.log(e);
        if(e.index == 1 && !this.apiRendered){
            setTimeout(() => {
                hljs.initHighlighting();
                this.apiRendered = true;
            }, 1000);
        }
    }


    getData(module, doc) {
        const url = this.coreUrl + '/' + module + '/' + doc + '.md';
        this.http.get(url, {responseType: 'text'}).subscribe(
            data => {
                if (doc === 'README') {
                    this.overview = data;
                    if (!this.overviewRendered) {
                        setTimeout(() => {
                            hljs.initHighlighting();
                            this.overviewRendered = true;
                        }, 2000);
                    }
                }

                if (doc === 'API') {
                    this.api = data;
                }

            },
            err => console.error(err)
        );
    }


}
