import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import {AtLayoutComponent} from "../../../lib/core/layout/layout.component";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

    @Input('sidenav') sidenav: any;
    @Input('sidepanel') sidepanel: any;

    @Input('layoutRef') layoutRef: AtLayoutComponent;

    @ViewChildren('userButton') userButton: QueryList<ElementRef>;
    _userButtonWidth: any;

    get userButtonWidth() {
        return this._userButtonWidth ? `${this._userButtonWidth}px` : '0';
    }


    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        // Wait for DOM rendering
        setTimeout(() => {
            this._userButtonWidth = this.userButton.first.nativeElement.clientWidth;
        }, 1);
    }

    onAtFavoritesChange(atSidenavItems) {
        // Add your method to save favorites here...
    }
}
