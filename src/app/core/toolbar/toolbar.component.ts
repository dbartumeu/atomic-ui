import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../../shared/global/golbal.service';
import {AtEvents} from 'atomic-ui';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    providers: [GlobalService]
})
export class ToolbarComponent implements OnInit {

    @Input('sidenav') sidenav: any;
    @Input('sidepanel') sidepanel: any;

    layoutRef: any;

    constructor(private router: Router, public globalService: GlobalService, private atEvents: AtEvents) {
        this.atEvents.subscribe('layoutRef', (layoutRef) => {
            this.layoutRef = layoutRef;
        });
    }

    ngOnInit() {
        console.log(this.globalService.layoutRef);
    }
}
