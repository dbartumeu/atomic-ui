import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'at-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss' ],
})
export class AtConfirmDialogComponent {
  title: string;
  message: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  constructor(private _dialogRef: MatDialogRef<AtConfirmDialogComponent>) {}

  cancel(): void {
    this._dialogRef.close(false);
  }

  accept(): void {
    this._dialogRef.close(true);
  }
}
