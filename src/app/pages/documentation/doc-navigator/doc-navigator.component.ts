import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'doc-navigator',
    templateUrl: './doc-navigator.component.html',
    styleUrls: ['./doc-navigator.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DocNavigatorComponent implements OnInit {


    constructor(private router: Router) {
        console.log('asdasd');
        console.log(router.config);
    }

    ngOnInit(): void {


    }

}
