import {NgModule, Type, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

/**
 * PIPES
 */
import {AtTruncatePipe} from './pipes/truncate/truncate.pipe';

const AT_PIPES: Type<any>[] = [
    AtTruncatePipe,
];

/**
 * ANIMATIONS
 */

import {AtToggleDirective} from './animations/toggle/toggle.directive';
import {AtFadeDirective} from './animations/fade/fade.directive';

const AT_ANIMATIONS: Type<any>[] = [
    AtToggleDirective,
    AtFadeDirective,
];

export {AtToggleDirective, AtFadeDirective};
export {AtCollapseAnimation} from './animations/collapse/collapse.animation';
export {AtFadeInOutAnimation} from './animations/fade/fadeInOut.animation';

/**
 * BEHAVIORS
 */
export {ICanDisable, mixinDisabled} from './behaviors/disabled.mixin';
export {ICanDisableRipple, mixinDisableRipple} from './behaviors/disable-ripple.mixin';

/**
 * SERVICES
 */
import {AtMediaReplayService} from './services/mediareplay/media-replay.service';
import {AtUtilService} from './services/util.service';


export {AtMediaReplayService};

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
    ],
    declarations: [
        AT_PIPES,
        AT_ANIMATIONS
    ],
    exports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        AT_PIPES,
        AT_ANIMATIONS
    ],
    providers: [
        AtMediaReplayService,
        AtUtilService
    ],
})
export class AtCommonModule {

}