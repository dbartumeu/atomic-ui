import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AtDialogComponent, AtDialogTitleDirective,
         AtDialogActionsDirective, AtDialogContentDirective } from './dialog.component';
import { AtAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { AtConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AtPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { AtDialogService, DIALOG_PROVIDER } from './services/dialog.service';

const TD_DIALOGS: Type<any>[] = [
  AtAlertDialogComponent,
  AtConfirmDialogComponent,
  AtPromptDialogComponent,
  AtDialogComponent,
  AtDialogTitleDirective,
  AtDialogActionsDirective,
  AtDialogContentDirective,
];

const TD_DIALOGS_ENTRY_COMPONENTS: Type<any>[] = [
  AtAlertDialogComponent,
  AtConfirmDialogComponent,
  AtPromptDialogComponent,
];

export { IAlertConfig, IConfirmConfig, IPromptConfig } from './services/dialog.service';
export { AtDialogService, AtDialogComponent, AtDialogTitleDirective,
         AtAlertDialogComponent, AtConfirmDialogComponent, AtPromptDialogComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    TD_DIALOGS,
  ],
  exports: [
    TD_DIALOGS,
  ],
  providers: [
    DIALOG_PROVIDER,
  ],
  entryComponents: [
    TD_DIALOGS_ENTRY_COMPONENTS,
  ],
})
export class AtDialogsModule {

}
