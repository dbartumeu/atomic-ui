import {Subscription} from 'rxjs';
import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AtSidenavService} from '@atomic/core';
import {AtSidenavItem} from '@atomic/core';
import {AtScrollbarService} from '@atomic/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [AtScrollbarService]
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {

    atSidenavItems: AtSidenavItem[] = [];

    private atSidenavItemsChange: Subscription;
    private routerEventsChange: Subscription;
    private avSidenavCurrentlyOpenChange: Subscription;

    backdrop: HTMLElement;

    // Todo Change all Setup to core component

    constructor(private avSidenavService: AtSidenavService,
                private avScrollbarService: AtScrollbarService,
                public router: Router) {

        if (this.avSidenavService.getAtSidenavItems().length === 0) {

            avSidenavService.buildMenuByRoutes(router.config);

        }


    }

    /**
     * Open AtSidenavItem based on the route
     * @param route
     */
    private openAtsidenavItem(route: string) {
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
        this.backdrop = <HTMLElement>document.getElementsByClassName('mat-sidenav-backdrop')[0];
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

    ngOnInit() {

        this.openAtsidenavItem(this.router.url);

        this.atSidenavItemsChange = this.avSidenavService.atSidenavItemsChange
            .subscribe((atSidenavItems: AtSidenavItem[]) => {
                this.atSidenavItems = this.avSidenavService.sortAtSidenavItems(atSidenavItems, 'position');

                // If you want show the breadcrumb trail just import the breadcrumb module and uncomment the code below

                // setTimeout(() => {
                //     this.initAtBreadcrumb(this.avSidenavService.flattenTree());
                // })
            });


        // Every time route changes it's necessary open the correct AtSidenavItem parent
        this.routerEventsChange = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.openAtsidenavItem(event.url)
            }
        });
    }

    ngAfterViewInit() {
        // force scrollbar sync when sidenav items are toggled
        this.avSidenavCurrentlyOpenChange = this.avSidenavService.avSidenavCurrentlyOpenChange.subscribe(() => {
            let sb = this.avScrollbarService.getInstance('avSidenavScrollbar');
            sb.update(true);
        });
    }

    ngOnDestroy() {
        this.avSidenavCurrentlyOpenChange.unsubscribe();
        this.atSidenavItemsChange.unsubscribe();
        this.routerEventsChange.unsubscribe();
    }
}
