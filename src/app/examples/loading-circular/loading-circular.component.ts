import { Component, ViewContainerRef } from '@angular/core';
import { AtLoadingService } from 'ngx-atomic';

@Component({
    selector: 'loading-circular',
    templateUrl: './loading-circular.component.html',
})
export class LoadingCircularComponent {

    overlayStarSyntax: boolean = false;

    constructor(private _loadingService: AtLoadingService) {

    }

    ngOnInit(): void {
        this._loadingService.register('overlayStarSyntax');
    }

    toggleOverlayStarSyntax(): void {
        if (this.overlayStarSyntax) {
            this._loadingService.register('overlayStarSyntax');
        } else {
            this._loadingService.resolve('overlayStarSyntax');
        }
        this.overlayStarSyntax = !this.overlayStarSyntax;
    }
}
