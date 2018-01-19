import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AtLoadingService, LOADING_PROVIDER } from './services/loading.service';
import { LOADING_FACTORY_PROVIDER } from './services/loading.factory';
import { AtLoadingDirective } from './directives/loading.directive';
import { AtLoadingComponent } from './loading.component';

const TD_LOADING: Type<any>[] = [
  AtLoadingComponent,
  AtLoadingDirective,
];

const TD_LOADING_ENTRY_COMPONENTS: Type<any>[] = [
  AtLoadingComponent,
];

export { LoadingType, LoadingMode, LoadingStrategy } from './loading.component';
export { AtLoadingService, IAtLoadingConfig } from './services/loading.service';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    OverlayModule,
    PortalModule,
  ],
  declarations: [
    TD_LOADING,
  ],
  exports: [
    TD_LOADING,
  ],
  providers: [
    LOADING_FACTORY_PROVIDER,
    LOADING_PROVIDER,
  ],
  entryComponents: [
    TD_LOADING_ENTRY_COMPONENTS,
  ],
})
export class AtLoadingModule {

}
