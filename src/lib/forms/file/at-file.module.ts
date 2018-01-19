import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AtFileSelectDirective } from './directives/file-select.directive';
import { AtFileDropDirective } from './directives/file-drop.directive';
import { AtFileUploadComponent } from './file-upload/file-upload.component';
import { AtFileInputComponent, AtFileInputLabelDirective } from './file-input/file-input.component';
import { AtFileService } from './services/file.service';

const TD_FILE: Type<any>[] = [
  AtFileSelectDirective,
  AtFileDropDirective,
  AtFileUploadComponent,
  AtFileInputComponent,
  AtFileInputLabelDirective,
];

export { AtFileUploadComponent } from './file-upload/file-upload.component';
export { AtFileInputComponent, AtFileInputLabelDirective } from './file-input/file-input.component';
export { AtFileSelectDirective } from './directives/file-select.directive';
export { AtFileDropDirective } from './directives/file-drop.directive';
export { AtFileService, IUploadOptions } from './services/file.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    PortalModule,
  ],
  declarations: [
    TD_FILE,
  ],
  exports: [
    TD_FILE,
  ],
  providers: [
    AtFileService,
  ],
})
export class AtFileModule {

}
