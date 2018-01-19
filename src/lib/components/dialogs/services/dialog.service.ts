import { Injectable, ViewContainerRef, Provider, SkipSelf, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

import { AtAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { AtConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AtPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';

export interface IDialogConfig extends MatDialogConfig {
  title?: string;
  message: string;
}

export interface IAlertConfig extends IDialogConfig {
  closeButton?: string;
}

export interface IConfirmConfig extends IDialogConfig {
  acceptButton?: string;
  cancelButton?: string;
}

export interface IPromptConfig extends IConfirmConfig {
  value?: string;
}

@Injectable()
export class AtDialogService {

  constructor(private _dialogService: MatDialog) {}

  /**
   * params:
   * - component: ComponentType<T>
   * - config: MatDialogConfig
   * Wrapper function over the open() method in MatDialog.
   * Opens a modal dialog containing the given component.
   */
  public open<T>(component: ComponentType<T>, config?: MatDialogConfig): MatDialogRef<T> {
    return this._dialogService.open(component, config);
  }

  /**
   * Wrapper function over the closeAll() method in MatDialog.
   * Closes all of the currently-open dialogs.
   */
  public closeAll(): void {
    this._dialogService.closeAll();
  }

  /**
   * params:
   * - config: IAlertConfig {
   *     message: string;
   *     title?: string;
   *     viewContainerRef?: ViewContainerRef;
   *     closeButton?: string;
   * }
   *
   * Opens an alert dialog with the provided config.
   * Returns an MatDialogRef<AtAlertDialogComponent> object.
   */
  public openAlert(config: IAlertConfig): MatDialogRef<AtAlertDialogComponent> {
    let dialogConfig: MatDialogConfig = this._createConfig(config);
    let dialogRef: MatDialogRef<AtAlertDialogComponent> =
      this._dialogService.open(AtAlertDialogComponent, dialogConfig);
    let alertDialogComponent: AtAlertDialogComponent = dialogRef.componentInstance;
    alertDialogComponent.title = config.title;
    alertDialogComponent.message = config.message;
    if (config.closeButton) {
      alertDialogComponent.closeButton = config.closeButton;
    }
    return dialogRef;
  }

  /**
   * params:
   * - config: IConfirmConfig {
   *     message: string;
   *     title?: string;
   *     viewContainerRef?: ViewContainerRef;
   *     acceptButton?: string;
   *     cancelButton?: string;
   * }
   *
   * Opens a confirm dialog with the provided config.
   * Returns an MatDialogRef<AtConfirmDialogComponent> object.
   */
  public openConfirm(config: IConfirmConfig): MatDialogRef<AtConfirmDialogComponent> {
    let dialogConfig: MatDialogConfig = this._createConfig(config);
    let dialogRef: MatDialogRef<AtConfirmDialogComponent> =
      this._dialogService.open(AtConfirmDialogComponent, dialogConfig);
    let confirmDialogComponent: AtConfirmDialogComponent = dialogRef.componentInstance;
    confirmDialogComponent.title = config.title;
    confirmDialogComponent.message = config.message;
    if (config.acceptButton) {
      confirmDialogComponent.acceptButton = config.acceptButton;
    }
    if (config.cancelButton) {
      confirmDialogComponent.cancelButton = config.cancelButton;
    }
    return dialogRef;
  }

  /**
   * params:
   * - config: IPromptConfig {
   *     message: string;
   *     title?: string;
   *     value?: string;
   *     viewContainerRef?: ViewContainerRef;
   *     acceptButton?: string;
   *     cancelButton?: string;
   * }
   *
   * Opens a prompt dialog with the provided config.
   * Returns an MatDialogRef<AtPromptDialogComponent> object.
   */
  public openPrompt(config: IPromptConfig): MatDialogRef<AtPromptDialogComponent> {
    let dialogConfig: MatDialogConfig = this._createConfig(config);
    let dialogRef: MatDialogRef<AtPromptDialogComponent> =
      this._dialogService.open(AtPromptDialogComponent, dialogConfig);
    let promptDialogComponent: AtPromptDialogComponent = dialogRef.componentInstance;
    promptDialogComponent.title = config.title;
    promptDialogComponent.message = config.message;
    promptDialogComponent.value = config.value;
    if (config.acceptButton) {
      promptDialogComponent.acceptButton = config.acceptButton;
    }
    if (config.cancelButton) {
      promptDialogComponent.cancelButton = config.cancelButton;
    }
    return dialogRef;
  }

  private _createConfig(config: IDialogConfig): MatDialogConfig {
    let dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    Object.assign(dialogConfig, config);
    return dialogConfig;
  }

}

export function DIALOG_PROVIDER_FACTORY(
    parent: AtDialogService, dialog: MatDialog): AtDialogService {
  return parent || new AtDialogService(dialog);
}

export const DIALOG_PROVIDER: Provider = {
  // If there is already service available, use that. Otherwise, provide a new one.
  provide: AtDialogService,
  deps: [[new Optional(), new SkipSelf(), AtDialogService], MatDialog],
  useFactory: DIALOG_PROVIDER_FACTORY,
};
