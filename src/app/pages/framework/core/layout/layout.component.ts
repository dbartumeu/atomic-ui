import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HljsService } from '../../../../shared/hljs/hljs.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-blank',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {

    overview: string;
    api: string;

    coreUrl: string = 'https://raw.githubusercontent.com/dbartumeu/atomic/master/src/lib/core';
    module: string = 'at-layout';

    overviewRendered: boolean = false;
    apiRendered: boolean = false;

    myControl: FormControl = new FormControl();

    constructor(public http: HttpClient,
                private hljs: HljsService) {
    }

    ngOnInit(): void {
        this.overviewRendered = false;
        this.apiRendered = false;

        this.getData('at-layout', 'README');
        this.getData('at-layout', 'REFERENCE');

    }

    selectedTabChange(e: any): void {
        if (e.index === 1 && !this.apiRendered) {
            this.hljs.init(1000);
            this.apiRendered = true;
        }
    }

    getData(module: string, doc: string): void {

        const url: string = this.coreUrl + '/' + module + '/' + doc + '.md';
        this.http.get(url, {responseType: 'text'}).subscribe(
            (data: string) => {
                if (doc === 'README') {
                    this.overview = data;
                    if (!this.overviewRendered) {
                        this.hljs.init(1000);
                        this.overviewRendered = true;
                    }
                }

                if (doc === 'REFERENCE') {
                    this.api = data;
                }

            },
            (err: string) => {
                console.error(err);
            },
        );
    }

}
