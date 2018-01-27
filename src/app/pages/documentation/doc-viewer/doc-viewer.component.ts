import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {HljsService} from '../../../shared/hljs/hljs.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'doc-viewer',
    templateUrl: './doc-viewer.component.html',
    styleUrls: ['./doc-viewer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DocViewerComponent implements OnInit {

    overview: string;
    api: string;

    coreUrl: string = 'https://raw.githubusercontent.com/dbartumeu/atomic-ui';

    overviewRendered: boolean = false;
    apiRendered: boolean = false;

    data: any;
    version: string = 'master';
    section: string = 'src/lib/core';
    module: string = 'at-layout';

    constructor(public http: HttpClient,
                private hljs: HljsService,
                private route: ActivatedRoute,
                private chDetRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.route.parent.params.subscribe(params => {
            this.version = params['version'];
            this.overviewRendered = false;
            this.apiRendered = false;
            setTimeout(() => {
                this.getData(this.data.docViewer.module, 'README');
                if (!this.data.docViewer.overviewOnly) {
                    this.getData(this.data.docViewer.module, 'REFERENCE');
                }
            }, 100);
        });
        this.route.data.subscribe(data => {
            this.data = data;
        });
    }

    selectedTabChange(e: any): void {
        if (e.index === 1 && !this.apiRendered) {
            this.hljs.init(1000);
            this.apiRendered = true;
        }
    }

    getData(module: string, doc: string): void {

        console.log(this.data);
        const url: string =
            this.data.docViewer.overviewOnly ?
                (this.coreUrl + '/' + this.version + '/' + this.data.docViewer.section + '/' + module + '.md') :
                (this.coreUrl + '/' + this.version + '/' + this.data.docViewer.section + '/' + module + '/' + doc + '.md');

        this.http.get(url, {responseType: 'text'}).subscribe(
            (data: string) => {

                if (doc === 'README') {
                    this.overview = data;
                    if (!this.overviewRendered) {
                        this.hljs.init(1000);
                        this.overviewRendered = true;
                        this.chDetRef.detectChanges();
                    }
                }

                if (doc === 'REFERENCE') {
                    this.api = data;
                    this.chDetRef.detectChanges();
                }

            },
            (err: string) => {
                this.overview = null;
                this.api = null;

                this.chDetRef.detectChanges();
                // console.error(err);
            },
        );
    }

}
