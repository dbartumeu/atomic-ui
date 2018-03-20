import {Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {Directive, HostBinding, HostListener, Inject, OnInit, OnDestroy, NgZone} from '@angular/core';
import {AtSidenavService} from './sidenav.service';
import {AtSidenavItem} from './sidenav-item/sidenav-item.model';
import {AtMediaService} from '../media/media.module';

@Directive({
    selector: '[atSidenavCollapsible]',
})
export class AtSidenavCollapsibleDirective implements OnInit, OnDestroy {

    private atMediaChange: Subscription;
    isMobile: boolean = false;
    currentlyOpen: AtSidenavItem[];
    backdrop: HTMLElement;

    @HostBinding('class.at-sidenav-collapsible')
    get isAtSidenavCollapsed(): boolean {
        return this.avSidenavService.isSidenavCollapsed;
    }

    @HostBinding('class.collapsed')
    collapsed: boolean;

    @HostListener('mouseenter')
    onMouseEnter() {
        if (this.isAtSidenavCollapsed && !this.isMobile) {
            this.collapsed = false;
            this.backdrop = <HTMLElement>document.getElementsByClassName('mat-drawer-backdrop')[0];
            this.backdrop.style.display = 'none';
            this.avSidenavService.toggleSidenavChanged(this.collapsed);
            this.avSidenavService.setCurrentlyOpen(this.currentlyOpen);
        }
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        if (this.isAtSidenavCollapsed && !this.isMobile) {
            this.collapsed = true;
            this.backdrop = <HTMLElement>document.getElementsByClassName('mat-drawer-backdrop')[0];
            this.backdrop.style.display = '';
            this.avSidenavService.toggleSidenavChanged(this.collapsed);
            this.currentlyOpen = this.avSidenavService.currentlyOpen;
            this.avSidenavService.setCurrentlyOpen([]);
        }
    }

    constructor(private avSidenavService: AtSidenavService,
                private _mediaService: AtMediaService, private _ngZone: NgZone,
                @Inject(DOCUMENT) private document: any) {

    }

    ngOnInit(): void {
        this.atMediaChange =
            this._mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
                this._ngZone.run(() => {
                    this.isMobile = !matches;
                });
            });
    }

    ngOnDestroy(): void {
        this.atMediaChange.unsubscribe();
    }
}
