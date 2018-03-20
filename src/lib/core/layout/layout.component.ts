import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, ElementRef,
    EventEmitter,
    forwardRef, HostBinding,
    Inject,
    Input,
    NgZone, OnDestroy,
    OnInit,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {isBoolean} from 'util';
import {AtMediaService} from '../media/media.service';

@Component({
    selector: 'at-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutComponent',
})
export class AtLayoutComponent implements OnInit, OnDestroy {

    private querySubscription: Subscription;

    private _cardOverlapTop: number = -60;
    private _cardOverlapBottom: number = -20;

    private wasSmallScreen: boolean;

    /**
     * @internal use Only
     */
    isSmallScreen: boolean = false;

    /**
     * @internal use Only
     */
    rsOpened: boolean = true;

    /**
     * @internal use Only
     */
    lsOpened: boolean = true;

    /**
     * @internal use Only
     */
    snOpened: boolean = true;

    /**
     * @internal use Only
     */
    spOpened: boolean = false;

    /**
     * @internal use Only
     */
    layoutSideBarLeft: AtLayoutSideBarLeftComponent;

    /**
     * @internal use Only
     */
    layoutSideBarRight: AtLayoutSideBarRightComponent;

    /**
     * @internal use Only
     */
    layoutSideNav: AtLayoutSideNavComponent;

    /**
     * @internal use Only
     */
    layoutHeader: AtLayoutHeaderComponent;

    /**
     * @internal use Only
     */
    layoutFooter: AtLayoutFooterComponent;

    /**
     * layoutType?: "basic" | "cardOver"
     * Sets the type of the Layout component. Defaults to "basic"
     */
    @Input() layoutType: 'main' | 'basic' | 'cardOver' = 'basic';

    /**
     * scrollOn?: "content" | "container"
     * Sets where the scroll will be positioned inside the Layout component.
     * If scrollOn = "content" the header is fixed
     * and the scroll is placed above the header. Defaults to "container" header and content can be scrolled.
     */
    @Input() scrollOn: 'content' | 'container' = 'container';

    /**
     * showAtScrollbar?:
     * Show AtScrollbar instead browser scrollbar. Defaults to true
     */
    @Input() showAtScrollbar: boolean = true;

    /**
     * cardWidth?:
     * The width of the card. Defaults to 75%
     */
    @Input() cardWidth: string = '75%';

    /**
     * cardAlign?:
     * The card alignment. Defaults to 'center'
     */
    @Input() cardAlign: 'left' | 'center' | 'right' = 'center';

    /**
     * cardClass?:
     * Custom class to assign to the card. Defaults to null
     */
    @Input() cardClass;

    /**
     * cardOverlapTop?:
     * Sets the top overlap of the card in px . Defaults to 60
     */
    @Input()
    set cardOverlapTop(cot: number) {
        if (cot) {
            this._cardOverlapTop = cot * -1;
        }
    }

    get cardOverlapTop(): number {
        return this._cardOverlapTop;
    }

    /**
     * cardOverlapBottom?:
     * Sets the bottom overlap of the card in px. Defaults to 20
     */
    @Input()
    set cardOverlapBottom(cob: number) {
        if (cob) {
            this._cardOverlapBottom = cob * -1;
        }
    }

    get cardOverlapBottom(): number {
        return this._cardOverlapBottom;
    }

    /**
     * Emit false when sidebar left is closed
     */
    @Output() onCloseSideBarLeft: EventEmitter<boolean> = new EventEmitter();

    /**
     * Emit false when sidebar right is closed
     */
    @Output() onCloseSideBarRight: EventEmitter<boolean> = new EventEmitter();

    /**
     * Emit false when sideNav is closed
     */
    @Output() onCloseSideNav: EventEmitter<boolean> = new EventEmitter();

    @HostBinding('class.at-hp-100') scrollOnContent: boolean = true;

    constructor(private mediaService: AtMediaService,
                private ngZone: NgZone,
                private changeDetectorRef: ChangeDetectorRef) {

    }

    ngOnInit(): void {
        // this.scrollOnContent = this.scrollOn === 'content';

        this.querySubscription =
            this.mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
                this.ngZone.run(() => {
                    this.isSmallScreen = !matches;

                    if (this.isSmallScreen !== this.wasSmallScreen) {
                        this.wasSmallScreen = this.isSmallScreen;

                        if (this.layoutSideBarLeft && !this.isDefined(this.layoutSideBarLeft.opened)) {
                            this.lsOpened = !this.isSmallScreen;
                        }

                        if (this.layoutSideBarRight && !this.isDefined(this.layoutSideBarRight.opened)) {
                            this.rsOpened = !this.isSmallScreen;
                        }

                        if (this.layoutSideNav && !this.isDefined(this.layoutSideNav.opened)) {
                            this.snOpened = !this.isSmallScreen;
                        }

                        this.changeDetectorRef.markForCheck();
                    }
                });
            });
    }

    public isDefined(val) {
        return typeof val !== 'undefined';
    }

    /**
     * Open / Close sidebar Left
     */
    public toggleSideBarLeft(): void {
        this.lsOpened = !this.lsOpened;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Open / Close sidebar Right
     */
    public toggleSideBarRight(): void {
        this.rsOpened = !this.rsOpened;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Open / Close sidenav
     */
    public toggleSideNav(): void {
        this.snOpened = !this.snOpened;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Open / Close sidepanel
     */
    public toggleSidePanel(): void {
        this.spOpened = !this.spOpened;
        this.changeDetectorRef.markForCheck();
    }

    /**
     * @internal use only
     */
    closeLeftSidenav(): void {
        if (isBoolean(this.layoutSideBarLeft.opened)) {
            this.onCloseSideBarLeft.emit(false);
        } else {
            this.lsOpened = false;
        }
    }

    /**
     * @internal use only
     */
    closeRightSidenav(): void {
        if (isBoolean(this.layoutSideBarRight.opened)) {
            this.onCloseSideBarRight.emit(false);
        } else {
            this.rsOpened = false;
        }
    }

    /**
     * @internal use only
     */
    closeSideNav(): void {
        if (isBoolean(this.layoutSideNav.opened)) {
            this.onCloseSideNav.emit(false);
        } else {
            this.snOpened = false;
        }
    }

    /**
     * @internal use only
     */
    closeSidePanel(): void {
        this.spOpened = false;
    }

    /**
     * @internal use only
     */
    forceDetection(): void {
        this.changeDetectorRef.detectChanges();
    }

    /**
     * @internal use only
     */
    ngOnDestroy(): void {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    }

}

@Component({
    selector: 'at-layout-header',
    template: `
        <div [style.height]="height" [ngClass]="[color, pattern]"
             [class.transparent]="position === 'cover' && _parent.scrollOn=='content'">
            <div>
                <ng-content></ng-content>
            </div>
        </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutHeaderComponent',
})
export class AtLayoutHeaderComponent implements AfterViewInit {

    private _color: string;
    private _height: string = 'auto';
    private _pattern: string;

    /**
     * @internal use only
     */
    _computedHeight: number;

    @Input()
    set color(c: string) {
        this._color = c;
    }

    get color(): string {
        if (this._color) {
            return 'mat-bg-' + this._color;
        }

        return '';
    }

    @Input()
    set height(h: string) {
        this._height = h;
    }

    get height(): string {
        return this._height;
    }

    @Input()
    set pattern(p: string) {
        this._pattern = p;
    }

    get pattern(): string {
        if (this._pattern) {
            return 'at-pattern-' + this._pattern;
        }
        return '';
    }

    @Input() position: 'inside' | 'cover' | 'outside' = 'inside';

    constructor(@Inject(forwardRef(() => AtLayoutComponent))
                public _parent: AtLayoutComponent,
                public elRef: ElementRef) {
        this._parent.layoutHeader = this;
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.elRef.nativeElement.parentNode) {
                this._computedHeight = this.elRef.nativeElement.parentNode.getBoundingClientRect().height;
            }

            // this.changeDetector.detectChanges();
            this._parent.forceDetection();
        });
    }

}

@Component({
    selector: 'at-layout-content',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutContentComponent',
})
export class AtLayoutContentComponent {
}

@Component({
    selector: 'at-layout-sidebar-left',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutSideBarLeftComponent',
})
export class AtLayoutSideBarLeftComponent implements OnInit {
    /**
     * Sets sidebar width. Defaults to "200px"
     */
    @Input() width?: string = '200px';

    /**
     * mode?: "side" | "cover"
     * Sets sidebar mode. Defaults to ""
     */
    @Input() mode?: string;

    /**
     * opened?:
     * Sets the sidebar opened property. Defaults to true
     */
    @Input() opened?: boolean;

    /**
     * mediaQuery?:
     * A media query string. Defaults to "gt-sm"
     */
    @Input() mediaQuery?: string = 'gt-sm';

    /**
     * mediaClasses?:
     * A set of classes to apply based on mediaQuery. Defaults to ['at-sidenav-no-background']
     */
    @Input() mediaClasses?: string[] = ['at-sidenav-no-background'];

    /**
     * showAtScrollbar?:
     * Show AtScrollbar instead browser scrollbar. Defaults to true
     */
    @Input() showAtScrollbar?: boolean = true;

    constructor(@Inject(forwardRef(() => AtLayoutComponent))
                private _parent: AtLayoutComponent) {

    }

    ngOnInit(): void {
        this._parent.layoutSideBarLeft = this;
    }
}

@Component({
    selector: 'at-layout-sidebar-right',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutSideBarRightComponent',
})
export class AtLayoutSideBarRightComponent implements OnInit {
    /**
     * Sets sidebar width. Defaults to "200px"
     */
    @Input() width?: string = '200px';

    /**
     * mode?: "side" | "cover"
     * Sets sidebar mode. Defaults to ""
     */
    @Input() mode?: string;

    /**
     * opened?:
     * Sets the sidebar opened property. Defaults to true
     */
    @Input() opened?: boolean;

    /**
     * mediaQuery?:
     * A media query string. Defaults to "gt-sm"
     */
    @Input() mediaQuery?: string = 'gt-sm';

    /**
     * mediaClasses?:
     * A set of classes to apply based on mediaQuery. Defaults to ['at-sidenav-no-background']
     */
    @Input() mediaClasses?: string[] = ['at-sidenav-no-background'];

    /**
     * showAtScrollbar?:
     * Show AtScrollbar instead browser scrollbar. Defaults to true
     */
    @Input() showAtScrollbar?: boolean = true;

    constructor(@Inject(forwardRef(() => AtLayoutComponent))
                private _parent: AtLayoutComponent) {

    }

    ngOnInit(): void {
        this._parent.layoutSideBarRight = this;
    }
}

@Component({
    selector: 'at-layout-sidenav',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutSidenavComponent',
})
export class AtLayoutSideNavComponent implements OnInit {

    private _elevation: string;
    /**
     * Sets sidebar width. Defaults to "200px"
     */
    @Input() width?: string = '280px';

    /**
     * mode?: "side" | "cover"
     * Sets sidebar mode. Defaults to ""
     */
    @Input() mode?: string;

    /**
     * opened?:
     * Sets the sidebar opened property. Defaults to true
     */
    @Input() opened?: boolean;

    /**
     * mediaQuery?:
     * A media query string. Defaults to "gt-sm"
     */
    @Input() mediaQuery?: string = 'gt-sm';

    /**
     * mediaClasses?:
     * A set of classes to apply based on mediaQuery. Defaults to ['at-sidenav-no-background']
     */
    @Input() mediaClasses?: string[] = [];

    @Input()
    set elevation(e: string) {
        const eNumber: number = parseInt(e, 10);
        if (eNumber && (eNumber >= 0 && eNumber <= 24)) {
            this._elevation = e;
        } else {
            throw new Error('AtLayoutSideNavComponent: Elevation index must be between 0 and 24');
        }
    }

    get elevation(): string {
        if (this._elevation) {
            return 'mat-elevation-z' + this._elevation;
        }

        return '';
    }

    constructor(@Inject(forwardRef(() => AtLayoutComponent))
                private _parent: AtLayoutComponent) {

    }

    ngOnInit(): void {
        this._parent.layoutSideNav = this;
    }
}

@Component({
    selector: 'at-layout-footer',
    template: `
        <div [style.height]="height" [ngClass]="[color]"
             [class.transparent]="position === 'cover' && _parent.scrollOn=='content'">
            <ng-content></ng-content>
        </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    exportAs: 'AtLayoutFooterComponent',
})
export class AtLayoutFooterComponent implements AfterViewInit {

    private _color: string;
    private _height: string = 'auto';

    /**
     * @internal use only
     */
    _computedHeight: number;

    @Input()
    set color(c: string) {
        this._color = c;
    }

    get color(): string {
        if (this._color) {
            return 'mat-bg-' + this._color;
        }

        return '';
    }

    @Input()
    set height(h: string) {
        this._height = h;
    }

    get height(): string {
        return this._height;
    }

    @Input() position: 'inside' | 'cover' | 'outside' = 'inside';

    constructor(@Inject(forwardRef(() => AtLayoutComponent))
                public _parent: AtLayoutComponent,
                public elRef: ElementRef) {
        this._parent.layoutFooter = this;
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this._computedHeight = this.elRef.nativeElement.parentNode.getBoundingClientRect().height;
            // this.changeDetector.detectChanges();
            this._parent.forceDetection();
        });
    }

}
