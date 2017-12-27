import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Inject, Input, NgZone, OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AtMediaService} from '../../at-media/at-media.service';
import {isBoolean} from "util";

@Component({
    selector: 'at-layout-sidebar',
    templateUrl: './at-layout-sidebar.component.html',
    styleUrls: ['./at-layout-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AtLayoutSideBarComponent {

    private querySubscription: Subscription;

    /**
     * @internal use Only
     * @type {boolean}
     */
    isSmallScreen: boolean = false;

    /**
     * @internal use Only
     * @type {boolean}
     */
    private wasSmallScreen: boolean;

    /**
     * @internal use Only
     * @type {boolean}
     */
    rsOpened = true;

    /**
     * @internal use Only
     * @type {boolean}
     */
    lsOpened = true;

    /**
     * @internal use Only
     * @type {boolean}
     */
    layoutSideBarLeft: AtLayoutSideBarLeftComponent;

    /**
     * @internal use Only
     * @type {boolean}
     */
    layoutSideBarRight: AtLayoutSideBarRightComponent;


    @Input() scrollOn: 'content' | 'container' = 'container';

    /**
     * showAtScrollbar?:
     * Show AtScrollbar instead browser scrollbar. Defaults to true
     * @type {boolean}
     */
    @Input() showAtScrollbar: boolean = true;

    /**
     * Emit false when sidebar left is closed
     * @type {EventEmitter<any>}
     */
    @Output() onCloseSideBarLeft = new EventEmitter();

    /**
     * Emit false when sidebar right is closed
     * @type {EventEmitter<any>}
     */
    @Output() onCloseSideBarRight = new EventEmitter();

    constructor(private mediaService: AtMediaService,
                private ngZone: NgZone,
                private changeDetectorRef: ChangeDetectorRef) {

    }

    ngOnInit() {

        // console.log(this.sideNav)

        this.querySubscription =
            this.mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
                this.ngZone.run(() => {
                    this.isSmallScreen = !matches;

                    if (this.isSmallScreen !== this.wasSmallScreen) {
                        this.wasSmallScreen = this.isSmallScreen;

                        this.lsOpened = !this.isSmallScreen;
                        this.rsOpened = !this.isSmallScreen;

                        this.changeDetectorRef.markForCheck();
                    }
                });
            });

    }

    /**
     * Open / Close sidebar Left
     */
    public toggleSideBarLeft() {
        this.lsOpened = !this.lsOpened;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Open / Close sidebar Right
     */
    public toggleSideBarRight() {
        this.rsOpened = !this.rsOpened;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * @internal use only
     */
    closeLeftSidenav() {
        if (isBoolean(this.layoutSideBarLeft.opened)) {
            this.onCloseSideBarLeft.emit(false);
        } else {
            this.lsOpened = false;
        }
    }

    /**
     * @internal use only
     */
    closeRightSidenav() {
        if (isBoolean(this.layoutSideBarRight.opened)) {
            this.onCloseSideBarRight.emit(false);
        } else {
            this.rsOpened = false;
        }
    }

}

@Component({
    selector: 'at-layout-sidebar-left',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutSideBarLeftComponent'
})
export class AtLayoutSideBarLeftComponent implements OnInit {
    /**
     * Sets sidebar width. Defaults to "200px"
     * @type {string}
     */
    @Input() width?: string = '200px';

    /**
     * mode?: "side" | "cover"
     * Sets sidebar mode. Defaults to ""
     * @type {string}
     */
    @Input() mode?: string;

    /**
     * opened?:
     * Sets the sidebar opened property. Defaults to true
     * @type {boolean}
     */
    @Input() opened?: boolean;

    /**
     * mediaQuery?:
     * A media query string. Defaults to "gt-sm"
     * @type {string}
     */
    @Input() mediaQuery?: string = 'gt-sm';

    /**
     * mediaClasses?:
     * A set of classes to apply based on mediaQuery. Defaults to ['at-sidenav-no-background']
     * @type {string[]}
     */
    @Input() mediaClasses?: string[] = ['at-sidenav-no-background'];

    /**
     * showAtScrollbar?:
     * Show AtScrollbar instead browser scrollbar. Defaults to true
     * @type {boolean}
     */
    @Input() showAtScrollbar?: boolean = true;

    constructor(@Inject(forwardRef(() => AtLayoutSideBarComponent))
                private _parent: AtLayoutSideBarComponent) {

    }

    ngOnInit() {
        this._parent.layoutSideBarLeft = this;
    }
}

@Component({
    selector: 'at-layout-sidebar-right',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutSideBarRightComponent'
})
export class AtLayoutSideBarRightComponent implements OnInit {
    /**
     * Sets sidebar width. Defaults to "200px"
     * @type {string}
     */
    @Input() width?: string = '200px';

    /**
     * mode?: "side" | "cover"
     * Sets sidebar mode. Defaults to ""
     * @type {string}
     */
    @Input() mode?: string;

    /**
     * opened?:
     * Sets the sidebar opened property. Defaults to true
     * @type {boolean}
     */
    @Input() opened?: boolean;

    /**
     * mediaQuery?:
     * A media query string. Defaults to "gt-sm"
     * @type {string}
     */
    @Input() mediaQuery?: string = 'gt-sm';

    /**
     * mediaClasses?:
     * A set of classes to apply based on mediaQuery. Defaults to ['at-sidenav-no-background']
     * @type {string[]}
     */
    @Input() mediaClasses?: string[] = ['at-sidenav-no-background'];

    /**
     * showAtScrollbar?:
     * Show AtScrollbar instead browser scrollbar. Defaults to true
     * @type {boolean}
     */
    @Input() showAtScrollbar?: boolean = true;

    constructor(@Inject(forwardRef(() => AtLayoutSideBarComponent))
                private _parent: AtLayoutSideBarComponent) {

    }

    ngOnInit() {
        this._parent.layoutSideBarRight = this;
    }
}