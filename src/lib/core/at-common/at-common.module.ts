import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * PIPES
 */
import { AtTruncatePipe } from './pipes/truncate/truncate.pipe';

const AT_PIPES: Type<any>[] = [
    AtTruncatePipe,
];

/**
 * ANIMATIONS
 */

import { AtToggleDirective } from './animations/toggle/toggle.directive';
import { AtFadeDirective } from './animations/fade/fade.directive';

const AT_ANIMATIONS: Type<any>[] = [
    AtToggleDirective,
    AtFadeDirective,
];

export { AtToggleDirective, AtFadeDirective };
export { AtCollapseAnimation } from './animations/collapse/collapse.animation';
export { AtFadeInOutAnimation } from './animations/fade/fadeInOut.animation';

/**
 * BEHAVIORS
 */
export { IControlValueAccessor, mixinControlValueAccessor } from './behaviors/control-value-accesor.mixin';
export { ICanDisable, mixinDisabled } from './behaviors/disabled.mixin';
export { ICanDisableRipple, mixinDisableRipple } from './behaviors/disable-ripple.mixin';

/**
 * SERVICES
 */
import { AtMediaReplayService } from './services/mediareplay/media-replay.service';
import { AtUtilService } from './services/util.service';
import { AtIconService } from './services/at-icon.service';
import { AtColorService } from './services/at-color.service';
import {AtEvents} from './services/at-events.service';

export { AtMediaReplayService };
export { AtEvents };

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
    ],
    declarations: [
        AT_PIPES,
        AT_ANIMATIONS,
    ],
    exports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        AT_PIPES,
        AT_ANIMATIONS,
    ],
    providers: [
        AtMediaReplayService,
        AtUtilService,
        AtIconService,
        AtColorService,
        AtEvents,
    ],
})
export class AtCommonModule {

}