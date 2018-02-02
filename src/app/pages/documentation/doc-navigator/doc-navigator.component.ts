import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AtEvents} from "atomic-ui";
import {GlobalService} from '../../../shared/global/golbal.service';

@Component({
    selector: 'doc-navigator',
    templateUrl: './doc-navigator.component.html',
    styleUrls: ['./doc-navigator.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [GlobalService]
})
export class DocNavigatorComponent implements OnInit {

    @ViewChild('layoutMain') layoutMain;

    constructor(private router: Router, private globalService: GlobalService, private atEvents: AtEvents) {
    }

    ngOnInit(): void {
        this.atEvents.publish('layoutRef', this.layoutMain);
        this.globalService.layoutRef = this.layoutMain;
    }

}
