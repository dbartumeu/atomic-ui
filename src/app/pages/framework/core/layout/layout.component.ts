import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {HljsService} from '../../../../shared/hljs/hljs.service';
import {FormControl} from '@angular/forms';

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

    myControl: FormControl = new FormControl();

    options = [
        'One',
        'Two',
        'Three'
    ];

    constructor(public http: HttpClient,
                private hljs: HljsService) {
    }

    ngOnInit() {
        console.log('Oninit');
        this.overviewRendered = false;
        this.apiRendered = false;

        this.getData('at-layout', 'README');
        this.getData('at-layout', 'API');

    }

    selectedTabChange(e) {
        if (e.index == 1 && !this.apiRendered) {
            this.hljs.init(1000);
            this.apiRendered = true;
        }
    }

    getData(module, doc) {
        console.log(this.overviewRendered);
        console.log(this.apiRendered);
        const url = this.coreUrl + '/' + module + '/' + doc + '.md';
        this.http.get(url, {responseType: 'text'}).subscribe(
            data => {
                if (doc === 'README') {
                    this.overview = data;
                    if (!this.overviewRendered) {
                        this.hljs.init(1000);
                        this.overviewRendered = true;
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
