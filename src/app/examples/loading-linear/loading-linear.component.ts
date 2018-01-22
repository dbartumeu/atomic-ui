import { Component, ViewContainerRef } from '@angular/core';
import { AtLoadingService } from 'ngx-atomic/components';

@Component({
    selector: 'loading-linear',
    templateUrl: './loading-linear.component.html',
})
export class LoadingLinearComponent {

    replaceDemo: any = {
        name: '',
        select: '',
        description: '',
    };

    constructor(private _loadingService: AtLoadingService) {

    }

    toggleReplaceTemplateSyntax(): void {
        this._loadingService.register('replaceTemplateSyntax');
        let value: number = 0;
        let interval = setInterval(() => {
            this._loadingService.setValue('replaceTemplateSyntax', value);
            value = value + 10;
            if (value > 100) {
                clearInterval(interval);
            }
        }, 250);
        setTimeout(() => {
            this._loadingService.resolve('replaceTemplateSyntax');
        }, 3000);
    }
}
