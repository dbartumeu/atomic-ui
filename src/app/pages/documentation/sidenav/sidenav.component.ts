import {Subscription} from 'rxjs';
import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AtSidenavService, AtSidenavItem, AtPermissionsService, AtEvents} from 'atomic-ui';
import {HttpClient} from '@angular/common/http';
import {VERSIONS} from '../documentation-routing.module';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {

    private atSidenavItemsChange: Subscription;
    private routerEventsChange: Subscription;
    private avSidenavCurrentlyOpenChange: Subscription;

    atSidenavItems: AtSidenavItem[] = [];
    versions = VERSIONS;
    selectedVersion = VERSIONS[0];
    backdrop: HTMLElement;

    constructor(private avSidenavService: AtSidenavService,
                public router: Router,
                public http: HttpClient,
                private atPermsService: AtPermissionsService,
                private atEvents: AtEvents) {
        if (this.avSidenavService.getAtSidenavItems().length === 0) {
            this.avSidenavService.buildMenuByRoutes(this.router.config, {version: this.selectedVersion});
            this.atPermsService.register([this.selectedVersion]);
        }
    }

    /**
     * Open AtSidenavItem based on the route
     * @param route
     */
    private openAtsidenavItem(route: string): void {
        this.avSidenavService.openAtSidenavItemByRoute(route);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 400);
    }

    /**
     * Makes the sidenav collapsible or pinned. When sidenav is collapsible
     * the user gain more screen space, because the sidenav only shows item icons.
     * When the user hover the sidenav it shows again items names and descriptions.
     */
    toggleSidenavCollapsed() {
        this.backdrop = <HTMLElement>document.getElementsByClassName('mat-drawer-backdrop')[0];
        this.backdrop.style.display = '';
        this.avSidenavService.isSidenavCollapsed = !this.avSidenavService.isSidenavCollapsed;
        this.avSidenavService.toggleSidenavChanged(true);
    }

    /**
     * True if sidenav is collapsed
     * @returns {boolean}
     */
    isSidenavCollapsed(): boolean {
        return this.avSidenavService.isSidenavCollapsed;
    }

    changeVersion(version) {
        this.selectedVersion = version;
        this.atPermsService.register([this.selectedVersion]);
        this.atEvents.publish('version:changed', this.selectedVersion);
        this.avSidenavService.buildMenuByRoutes(this.router.config, {version: this.selectedVersion});

        this.avSidenavService.applyPerms(this.atPermsService.perms);

        this.router.navigateByUrl('docs/' + this.selectedVersion + '/getting-started');
    }

    ngOnInit() {
        this.openAtsidenavItem(this.router.url);

        this.atSidenavItemsChange = this.avSidenavService.atSidenavItemsChange
            .subscribe((atSidenavItems: AtSidenavItem[]) => {
                this.atSidenavItems = this.avSidenavService.sortAtSidenavItems(atSidenavItems, 'position');
            });

        // Every time route changes it's necessary open the correct AtSidenavItem parent
        this.routerEventsChange = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.openAtsidenavItem(event.url);
            }
        });
    }

    ngAfterViewInit() {
        // force scrollbar sync when sidenav items are toggled
        // this.avSidenavCurrentlyOpenChange = this.avSidenavService.avSidenavCurrentlyOpenChange.subscribe(() => {
        //     // let sb = this.avScrollbarService.getInstance('avSidenavScrollbar');
        //     // sb.update(true);
        // });
    }

    ngOnDestroy() {
        this.avSidenavCurrentlyOpenChange.unsubscribe();
        this.atSidenavItemsChange.unsubscribe();
        this.routerEventsChange.unsubscribe();
    }
}
