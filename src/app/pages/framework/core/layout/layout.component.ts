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


    constructor(public http: HttpClient) {
        this.getData('at-layout', 'README');
        this.getData('at-layout', 'API');
    }

    ngOnInit() {

    }


    selectedTabChange(e) {
        console.log(e);
    }

    getData(module, doc) {
        const url = this.coreUrl + '/' + module + '/' + doc + '.md';
        this.http.get(url, {responseType: 'text'}).subscribe(
            data => {
                this.api = data;
                setTimeout(() => {
                    hljs.initHighlighting();
                }, 2000);
            },
            err => console.error(err)
        );
    }


}
