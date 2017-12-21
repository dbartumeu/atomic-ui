import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtMediaService, MEDIA_PROVIDER} from './at-media.service';
import {AtMediaToggleDirective} from './at-media-toggle.directive';
export {AtMediaService, AtMediaToggleDirective};

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        AtMediaToggleDirective,
    ],
    exports: [
        AtMediaToggleDirective
    ],
    providers: [
        MEDIA_PROVIDER,
    ],
})

/**
 * ## some markdown
 * example
 */
export class AtMediaModule {

}