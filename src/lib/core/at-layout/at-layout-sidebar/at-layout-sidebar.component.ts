import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, ElementRef,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    NgZone, OnDestroy,
    OnInit,
    Output,
    ViewEncapsulation,
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
export class AtLayoutSideBarComponent implements OnInit, OnDestroy {

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

    /**
     * @internal use Only
     * @type {boolean}
     */
    layoutHeader: AtLayoutHeaderComponent;

    /**
     * layoutType?: "basic" | "cardOver"
     * Sets the type of the Layout component. Defaults to "basic"
     * @type {string}
     */
    @Input() layoutType: 'main' | 'basic' | 'cardOver' = 'basic';

    /**
     * scrollOn?: "content" | "container"
     * Sets where the scroll will be positioned inside the Layout component.
     * If scrollOn = "content" the header is fixed
     * and the scroll is placed above the header. Defaults to "container" header and content can be scrolled.
     * @type {string}
     */
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
    @Output() onCloseSideBarLeft: EventEmitter<boolean> = new EventEmitter();

    /**
     * Emit false when sidebar right is closed
     * @type {EventEmitter<any>}
     */
    @Output() onCloseSideBarRight: EventEmitter<boolean> = new EventEmitter();

    constructor(private mediaService: AtMediaService,
                private ngZone: NgZone,
                private changeDetectorRef: ChangeDetectorRef) {

    }

    ngOnInit(): void {

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

    forceDetection(): void {
        this.changeDetectorRef.detectChanges();
    }

    ngOnDestroy(): void {
        this.querySubscription.unsubscribe();
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

    @Input() position: 'inside' | 'cover' | 'outside';

    constructor(@Inject(forwardRef(() => AtLayoutSideBarComponent))
                private _parent: AtLayoutSideBarComponent,
                public elRef: ElementRef,
                public changeDetector: ChangeDetectorRef) {
        this._parent.layoutHeader = this;
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this._computedHeight = this.elRef.nativeElement.parentNode.getBoundingClientRect().height;
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

    ngOnInit(): void {
        this._parent.layoutSideBarRight = this;
    }
}