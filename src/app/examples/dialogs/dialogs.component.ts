import { Component, ViewContainerRef } from '@angular/core';
import { AtDialogService } from 'atomic-ui';

@Component({
    selector: 'dialogs',
    templateUrl: './dialogs.component.html',
})
export class DialogsComponent {
    constructor(private dialogService: AtDialogService,
                private viewContainerRef: ViewContainerRef) {

    }

    openAlert(): void {
        this.dialogService.openAlert({
            message: 'This is an alert',
            disableClose: false, // defaults to false
            viewContainerRef: this.viewContainerRef, // OPTIONAL
            title: 'myAlert', // OPTIONAL, hides if not provided
            closeButton: 'Close', // OPTIONAL, defaults to 'CLOSE'
        });
    }

    openConfirm(): void {
        this.dialogService.openConfirm({
            message: 'This is how simple it is to create a confirm with Atomic. Do you agree?',
            disableClose: false, // defaults to false
            viewContainerRef: this.viewContainerRef, // OPTIONAL
            title: 'Confirm', // OPTIONAL, hides if not provided
            cancelButton: 'Disagree', // OPTIONAL, defaults to 'CANCEL'
            acceptButton: 'Agree', // OPTIONAL, defaults to 'ACCEPT'
        }).afterClosed().subscribe((accept: boolean) => {
            if (accept) {
                // DO SOMETHING
                this.dialogService.openAlert({
                    message: 'Thanks. You are agree with us.',
                    disableClose: false, // defaults to false
                    viewContainerRef: this.viewContainerRef, // OPTIONAL
                    closeButton: 'Close', // OPTIONAL, defaults to 'CLOSE'
                });
            } else {
                // DO SOMETHING ELSE
                this.dialogService.openAlert({
                    message: 'Well. You are disagree with us.',
                    disableClose: false, // defaults to false
                    viewContainerRef: this.viewContainerRef, // OPTIONAL
                    closeButton: 'Close', // OPTIONAL, defaults to 'CLOSE'
                });
            }
        });
    }

    openPrompt(): void {
        this.dialogService.openPrompt({
            message: 'This is  a prompt. Prompt something.',
            viewContainerRef: this.viewContainerRef, // OPTIONAL
            title: 'Prompt', // OPTIONAL, hides if not provided
            value: 'Write something...', // OPTIONAL
            cancelButton: 'Cancel', // OPTIONAL, defaults to 'CANCEL'
            acceptButton: 'Ok', // OPTIONAL, defaults to 'ACCEPT'
        }).afterClosed().subscribe((newValue: string) => {
            if (newValue) {
                this.dialogService.openAlert({
                    message: 'You write ' + newValue,
                    disableClose: false, // defaults to false
                    viewContainerRef: this.viewContainerRef, // OPTIONAL
                    closeButton: 'Close', // OPTIONAL, defaults to 'CLOSE'
                });
            } else {
                // DO SOMETHING ELSE
            }
        });
    }
}
