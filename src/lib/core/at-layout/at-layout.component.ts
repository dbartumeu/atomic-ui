import {
    AfterViewInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ContentChild, Directive, ElementRef, EventEmitter, Inject, Input, NgZone,
    OnDestroy, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import {AtMediaService} from '../at-media/at-media.service';
import {Subscription} from 'rxjs/Subscription';
import {TemplatePortalDirective} from '@angular/cdk/portal';
import {isBoolean, isString} from 'util';
import * as _ from 'lodash';
import {AtUtilService} from '../at-common/services/util.service';
import {AtSidenavCollapsibleDirective} from '../at-sidenav/at-sidenav-collapsed.directive';
import {DOCUMENT} from '@angular/common';
import {AtMediaReplayService} from '../at-common/services/mediareplay/media-replay.service';
import {AtSidenavService} from '../at-sidenav/at-sidenav.service';

@Directive({
    selector: '[at-layout-toolbar]ng-template',
})
export class AtLayoutToolbarDirective extends TemplatePortalDirective {
    /**
     * position?: "inside" | "outside"
     * Set the toolbar position. If position = "inside" the toolbar is placed inside the sidenav container. Defaults to 'inside'
     * @type {string}
     */
    @Input() position: 'inside' | 'outside' = 'inside';

    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

@Directive({
    selector: '[at-layout-sidenav]ng-template',
})
export class AtLayoutSideNavDirective extends TemplatePortalDirective {
    /**
     * size?: "default" | "medium" | "large"
     * Sets the sidenav size. Defaults to 'default'
     * @type {string}
     */
    @Input() size: 'default' | 'medium' | 'large' = 'default';

    /**
     * pattern?: "no-pattern" | "pattern-1" | "pattern-2" | "pattern-3" | "pattern-4"
     * Sets the sidenav pattern. Defaults to 'no-pattern'
     * @type {string}
     */
    @Input() pattern: 'no-pattern' | 'pattern-1' | 'pattern-2' | 'pattern-3' | 'pattern-4' = 'no-pattern';

    /**
     * elevation?: "no-elevation" | "z1" | "z2" | "z3" | "z4" | "z5" | "z6" | "z7"
     * Sets the sidenav elevation. Defaults to 'no-elevation'
     * @type {string}
     */
    @Input() elevation: 'no-elevation' | 'z1' | 'z2' | 'z3' | 'z4' | 'z5' | 'z6' | 'z7' = 'no-elevation';

    /**
     * collapsible?: true | false
     * Sets collapsible feature. Defaults to true
     * @type {boolean}
     */
    @Input() collapsible: true;

    /**
     * mode?: "" | "over" | "side"
     * Sets the sidenav mode. If mode = "" the mode is handled by AtLayout ("over" on small screens "side" on all others). Defaults to ""
     * @type {string}
     */
    @Input() mode: '' | 'over' | 'side' = '';

    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

@Directive({
    selector: '[at-layout-sidepanel]ng-template',
})
export class AtLayoutSidePanelDirective extends TemplatePortalDirective {

    /**
     * width?: string
     * Sets the sidenav width. Defaults to "200px"
     */
    @Input() width?: string = '200px';

    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}

@Directive({
    selector: '[at-layout-sidebar-left]',
})
export class AtLayoutSideBarLeftDirective {
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

    /**
     * Emit false when sidebar is closed
     * @type {EventEmitter<any>}
     */
    @Output() onClose = new EventEmitter();

    /**
     * componentRef?:
     * Get the reference of the component to attach AtLayoutSideBarLeftDirective. Defaults to undefined
     * @type {AtLayoutComponent}
     */
    @Input() componentRef: AtLayoutComponent;

    constructor(public element: ElementRef) {
    }
}

@Directive({
    selector: '[at-layout-sidebar-right]',
})
export class AtLayoutSideBarRightDirective {
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


    /**
     * Emit false when sidebar is closed
     * @type {EventEmitter<any>}
     */
    @Output() onClose = new EventEmitter();

    /**
     * componentRef?:
     * Get the reference of the component to attach AtLayoutHeaderDirective. Defaults to undefined
     * @type {AtLayoutComponent}
     */
    @Input() componentRef: AtLayoutComponent;

    constructor() {

    }
}

@Directive({
    selector: '[at-layout-header]',
})
export class AtLayoutHeaderDirective {

    /**
     * height?:
     * Sets the header height in px. Defaults to 130
     * @type {number}
     */
    @Input() height: number = 130;

    /**
     * color?: "transparent" | "red-50" | "red-100" | ... | "red-900" | "pink-50" | "pink-100" | ... | "pink-900" |
     * "purple-50" | "purple-100" ... | "purple-900" | "deep-purple-50" | "deep-purple-100" ... | "deep-purple-900" |
     * "indigo-50" | "indigo-100" | ... | "indigo-900" | "blue-50" | "blue-100" | ... | "blue-900" |
     * "teal-50" | "teal-100" | ... | "teal-900" | "green-50" | "green-100" | ... | "green-900" |
     * "light-green-50" | "light-green-100" | ... | "light-green-900" | "lime-50" | "lime-100" | ... | "lime-900" |
     * "yellow-50" | "yellow-100" | ... | "yellow-900" | "amber-50" | "amber-100" | ... | "amber-900" |
     * "orange-50" | "orange-100" | ... | "orange-900" | "deep-orange-50" | "deep-orange-100" | ... | "deep-orange-900" |
     * "brown-50" | "brown-100" | ... | "brown-900" | "grey-50" | "grey-100" | ... | "grey-900" |
     * "blue-grey-50" | "blue-grey-100" | ... | "blue-grey-900"
     * Sets the background color of the header. Defaults to "transparent"
     * @type {string}
     */
    @Input() color: string = 'transparent';

    /**
     * pattern?: "pattern-1" | "pattern-2" | "pattern-3" | "pattern-4" | "pattern-5"
     * Sets the background pattern of the header. Defaults to ""
     * @type {string}
     */
    @Input() pattern: string = '';

    /**
     * componentRef?:
     * Get the reference of the component to attach AtLayoutHeaderDirective. Defaults to undefined
     * @type {AtLayoutComponent}
     */
    @Input() componentRef: AtLayoutComponent;

    constructor() {
    }
}

@Directive({
    selector: '[at-layout-content]',
})
export class AtLayoutContentDirective {

    /**
     * showAtScrollbar?:
     * Show AtScrollbar instead browser scrollbar. Defaults to true
     * @type {boolean}
     */
    @Input() showAtScrollbar?: boolean = true;

    /**
     * containerStyle?:object
     * Apply style to a content wrapper in json format
     */
    @Input() containerStyle?: object | null = null;

    constructor(public element: ElementRef) {
    }
}

@Component({
    selector: 'at-layout',
    templateUrl: './at-layout.component.html',
    styleUrls: ['./at-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

    private querySubscription: Subscription;


    /**
     * @internal use Only
     */
    @ContentChild(AtLayoutToolbarDirective) layoutToolbar: AtLayoutToolbarDirective;

    /**
     * @internal use Only
     */
    @ContentChild(AtLayoutSideNavDirective) layoutSideNav: AtLayoutSideNavDirective;

    /**
     * @internal use Only
     */
    @ContentChild(AtLayoutSidePanelDirective) layoutSidePanel: AtLayoutSidePanelDirective;


    /**
     * @internal use Only
     */
    @ContentChild(AtLayoutHeaderDirective) layoutHeader: AtLayoutHeaderDirective;


    /**
     * @internal use Only
     */
    @ContentChild(AtLayoutSideBarLeftDirective) layoutSideBarLeft: AtLayoutSideBarLeftDirective;

    /**
     * @internal use Only
     */
    @ContentChild(AtLayoutSideBarRightDirective) layoutSideBarRight: AtLayoutSideBarRightDirective;

    /**
     * @internal use Only
     */
    @ContentChild(AtLayoutContentDirective) layoutContent: AtLayoutContentDirective;

    /**
     * layoutType?: "basic" | "cardOver"
     * Sets the type of the Layout component. Defaults to "basic"
     * @type {string}
     */
    @Input() layoutType: 'main' | 'basic' | 'cardOver' = 'basic';

    /**
     * scrollOn?: "content" | "container"
     * Sets where the scroll will be positioned inside the Layout component. If scrollOn = "content" the header is fixed
     * and the scroll is placed above the header. Defaults to "container" header and content can be scrolled.
     * @type {string}
     */
    @Input() scrollOn: 'content' | 'container' = 'container';

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
    snOpened = true;

    /**
     * @internal use Only
     * @type {boolean}
     */
    spOpened = false;

    /**
     * @internal use Only
     * @type {string}
     */
    lId = _.uniqueId('layout-');

    constructor(public atUtil: AtUtilService,
                private mediaService: AtMediaService,
                private ngZone: NgZone,
                private element: ElementRef,
                private changeDetectorRef: ChangeDetectorRef) {

        if (this.layoutType === 'main') {
            if (this.layoutHeader) {
                throw Error(`Invalid Template: You can not use at-layout-header template in main layout`);
            }
        } else {
            if (this.layoutToolbar) {
                throw Error('Invalid Template: You can not use at-layout-toolbar template in ' + this.layoutType + ' layout');
            }

            if (this.layoutSideNav) {
                throw Error('Invalid Template: You can not use at-layout-side-nav template in ' + this.layoutType + ' layout');
            }

            if (this.layoutSidePanel) {
                throw Error('Invalid Template: You can not use at-layout-side-panel template in ' + this.layoutType + ' layout');
            }

            element.nativeElement.parentElement.className = 'at-layout-container';
            element.nativeElement.id = this.lId;
        }


    }

    /**
     * Open / Close sidenav
     */
    public toggleSideNav() {
        this.snOpened = !this.snOpened;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Open / Close sidepanel
     */
    public toggleSidePanel() {
        this.spOpened = !this.spOpened;
        this.changeDetectorRef.markForCheck();
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

    ngOnInit() {

        // console.log(this.sideNav)

        // this.atsc.ngOnInit();

        this.querySubscription =
            this.mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
                this.ngZone.run(() => {
                    this.isSmallScreen = !matches;

                    if (this.isSmallScreen !== this.wasSmallScreen) {
                        this.wasSmallScreen = this.isSmallScreen;

                        this.snOpened = !this.isSmallScreen;
                        this.lsOpened = !this.isSmallScreen;
                        this.rsOpened = !this.isSmallScreen;

                        this.changeDetectorRef.markForCheck();
                    }
                });
            });

    }

    ngAfterViewInit() {
        // console.log(this.sideNav)

    }

    ngOnDestroy(): void {
        this.querySubscription.unsubscribe();
    }

    updateView() {
        this.changeDetectorRef.markForCheck();
    }

    /**
     * @internal use only
     */
    lIsString(value) {
        return isString(value);
    }

    /**
     * @internal use only
     */
    lIsBoolean(value) {
        return isBoolean(value);
    }

    /**
     * @internal use only
     */
    onCloseSideNav() {
        this.snOpened = false;
    }

    /**
     * @internal use only
     */
    onCloseSidePanel() {
        this.spOpened = false;
    }

    /**
     * @internal use only
     */
    onCloseLeftSidenav() {
        if (isBoolean(this.layoutSideBarLeft.opened)) {
            this.layoutSideBarLeft.onClose.emit(false);
        } else {
            this.lsOpened = false;
        }
    }

    /**
     * @internal use only
     */
    onCloseRigthSidenav() {
        if (isBoolean(this.layoutSideBarRight.opened)) {
            this.layoutSideBarRight.onClose.emit(false);
        } else {
            this.rsOpened = false;
        }
    }
}
