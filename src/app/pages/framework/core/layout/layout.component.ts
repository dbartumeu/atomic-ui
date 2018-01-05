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
    url = 'https://raw.githubusercontent.com/Teradata/covalent/v1.0.0-beta.4/src/platform/core/layout/README.md';

    constructor(public http: HttpClient) {
        this.getData();
    }

    ngOnInit() {

    }

    getData() {
        this.http.get(this.url, {responseType: 'text'}).subscribe(
            data => {
                this.overview = data;
                hljs.initHighlighting();
            },
            err => console.error(err)
        );
    }


}
