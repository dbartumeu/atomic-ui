import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

/**
 * PIPES
 */
import {AtBytesPipe} from './pipes/bytes/bytes.pipe';
import {AtDigitsPipe} from './pipes/digits/digits.pipe';
import {AtTimeAgoPipe} from './pipes/time-ago/time-ago.pipe';
import {AtTimeDifferencePipe} from './pipes/time-difference/time-difference.pipe';
import {AtTruncatePipe} from './pipes/truncate/truncate.pipe';
import {AtKeysPipe} from './pipes/object/keys.pipe';

const AT_PIPES: Type<any>[] = [
    AtBytesPipe,
    AtDigitsPipe,
    AtTimeAgoPipe,
    AtTimeDifferencePipe,
    AtTruncatePipe,
    AtKeysPipe,
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
export {IControlValueAccessor, mixinControlValueAccessor} from './behaviors/control-value-accesor.mixin';
export {ICanDisable, mixinDisabled} from './behaviors/disabled.mixin';
export {ICanDisableRipple, mixinDisableRipple} from './behaviors/disable-ripple.mixin';

/**
 * SERVICES
 */
import {AtUtilService} from './services/util.service';
import {AtIconService, ICON_PROVIDER} from './services/icon.service';
import {AtColorService} from './services/color.service';
import {AtEvents} from './services/events.service';

export {AtIconService, AtEvents};

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
        AtUtilService,
        ICON_PROVIDER,
        AtColorService,
        AtEvents,
    ],
})
export class AtCommonModule {

}