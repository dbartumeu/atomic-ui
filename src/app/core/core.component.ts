import {Subscription} from 'rxjs';
import {Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy, NgZone} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AtSidenavService, AtPermissionsService, AtMediaService} from 'atomic-ui';
import {VERSIONS} from "../pages/documentation/documentation-routing.module";

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit, OnDestroy {

    @ViewChild('layoutMain') layoutMain;

    private _mediaSubscription: Subscription;
    private _routerEventsSubscription: Subscription;

    sidenavOpen: boolean = true;
    sidenavMode: string = 'side';
    isMobile: boolean = false;

    constructor(private _ngZone: NgZone,
                private router: Router,
                private atMediaService: AtMediaService,
                private avSidenavService: AtSidenavService,
                private atPermsService: AtPermissionsService) {
        this.atPermsService.register(VERSIONS);
    }

    ngOnInit() {

        this._mediaSubscription = this.atMediaService.registerQuery('gt-sm')
            .subscribe((matches: boolean) => {
                this._ngZone.run(() => {
                    this.isMobile = !matches;
                    this.sidenavMode = (this.isMobile) ? 'over' : 'side';
                    this.sidenavOpen = !this.isMobile;
                });
            });

        this.avSidenavService.sidenavCollapsedChange
            .subscribe(collapsed => {
                this.sidenavMode = !this.isMobile && !collapsed ? 'over' : 'side';
            });

        this._routerEventsSubscription = this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd && this.isMobile) {
                    this.layoutMain.toggleSideNav();
                }
            });
    }

    ngOnDestroy() {
        this._mediaSubscription.unsubscribe();
        this._routerEventsSubscription.unsubscribe();
    }
}
