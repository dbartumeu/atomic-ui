import {Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {Directive, HostBinding, HostListener, Inject, OnInit, OnDestroy} from '@angular/core';
import {MediaChange} from '@angular/flex-layout';
import {AtMediaReplayService} from '../at-common/services/mediareplay/media-replay.service';
import {AtSidenavService} from './at-sidenav.service';
import {AtSidenavItem} from './at-sidenav-item/at-sidenav-item.model';

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
            this.backdrop = <HTMLElement>document.getElementsByClassName('mat-sidenav-backdrop')[0];
            this.backdrop.style.display = 'none';
            this.avSidenavService.toggleSidenavChanged(this.collapsed);
            this.avSidenavService.setCurrentlyOpen(this.currentlyOpen);
        }
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        if (this.isAtSidenavCollapsed && !this.isMobile) {
            this.collapsed = true;
            this.backdrop = <HTMLElement>document.getElementsByClassName('mat-sidenav-backdrop')[0];
            this.backdrop.style.display = '';
            this.avSidenavService.toggleSidenavChanged(this.collapsed);
            this.currentlyOpen = this.avSidenavService.currentlyOpen;
            this.avSidenavService.setCurrentlyOpen([]);
        }
    }

    constructor(private avSidenavService: AtSidenavService,
                private atMediaReplayService: AtMediaReplayService,
                @Inject(DOCUMENT) private document: Document) {

    }

    ngOnInit(): void {
        this.atMediaChange = this.atMediaReplayService.atMediaChange.subscribe((change: MediaChange) => {
            this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
        });
    }

    ngOnDestroy(): void {
        this.atMediaChange.unsubscribe();
    }
}
