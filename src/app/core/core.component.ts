import {Subscription} from 'rxjs';
import {
    Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy
} from '@angular/core';
import {MediaChange} from '@angular/flex-layout';
import {Router, NavigationEnd} from '@angular/router';
import {AtMediaReplayService} from 'lib/core/at-common/services/mediareplay/media-replay.service';
import {AtSidenavService} from 'lib/core/at-sidenav/at-sidenav.service';
import { VERSIONS } from "../pages/documentation/documentation-routing.module";
import { AtPermissionsService } from "ngx-atomic/core";

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit, OnDestroy {

    //
    @ViewChild('layoutMain') layoutMain;

    private _mediaSubscription: Subscription;
    private _routerEventsSubscription: Subscription;

    sidenavOpen: boolean = true;
    sidenavMode: string = 'side';
    isMobile: boolean = false;

    constructor(private router: Router,
                private atMediaReplayService: AtMediaReplayService,
                private avSidenavService: AtSidenavService,
                private atPermsService: AtPermissionsService) {
        this.atPermsService.register(VERSIONS);
    }

    ngOnInit() {

        this._mediaSubscription = this.atMediaReplayService.atMediaChange
            .subscribe((change: MediaChange) => {
                let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

                this.isMobile = isMobile;
                this.sidenavMode = (isMobile) ? 'over' : 'side';
                this.sidenavOpen = !isMobile;
            });

        this.avSidenavService.sidenavCollapsedChange.subscribe(collapsed => {
            this.sidenavMode = !this.isMobile && !collapsed ? 'over' : 'side';
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && this.isMobile) {
                this.layoutMain.toggleSideNav();
            }
        });
        // if (this.router.url == '/') {
        //     this.router.navigateByUrl('/dashboards/dashboard1')
        // }
    }

    ngOnDestroy() {
        this._mediaSubscription.unsubscribe();
    }

    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
}
