import {Component, Input} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {EXAMPLE_COMPONENTS, LiveExample} from '../../examples/example.module';
import {AtCollapseAnimation} from 'atomic-ui';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'example-viewer',
    templateUrl: './example-viewer.component.html',
    styleUrls: ['./example-viewer.component.scss'],
    animations: [
        AtCollapseAnimation(), // using implicit anchor name 'tdCollapse' in template
    ],
})
export class ExampleViewerComponent {
    /** Component portal for the currently displayed example. */
    selectedPortal: ComponentPortal<any>;

    /** String key of the currently displayed example. */
    _example: string;

    exampleData: LiveExample;

    showSourceCode = false;

    baseUrl = 'https://raw.githubusercontent.com/dbartumeu/atomic/master/src/app/examples/';

    htmlCode: string;
    scssCode: string;
    tsCode: string;

    get example() {
        return this._example;
    }

    @Input()
    set example(example: string) {
        if (example && EXAMPLE_COMPONENTS[example]) {
            this._example = example;
            this.exampleData = EXAMPLE_COMPONENTS[example];
            this.selectedPortal = new ComponentPortal(this.exampleData.component);
            this.getData(example, 'html');
            this.getData(example, 'scss');
            this.getData(example, 'ts');
        } else {
            console.log('MISSING EXAMPLE: ', example);
        }
    }

    constructor(public http: HttpClient) {
    }

    toggleCodeViewer() {
        this.showSourceCode = !this.showSourceCode;
    }

    getData(name, ext) {
        const url = this.baseUrl + '/' + name + '/' + name + '.component.' + ext;
        this.http.get(url, {responseType: 'text'}).subscribe(
            data => {
                switch (ext) {
                    case 'html':
                        this.htmlCode = data;
                        break;
                    case 'scss':
                        this.scssCode = data;
                        break;
                    case 'ts':
                        this.tsCode = data;
                        break;
                }
            },
            err => console.error(err)
        );
    }


}
