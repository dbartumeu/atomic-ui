import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'at-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss' ],
})
export class AtAlertDialogComponent {
  title: string;
  message: string;
  closeButton: string = 'CLOSE';

  constructor(private _dialogRef: MatDialogRef<AtAlertDialogComponent>) {}

  close(): void {
    this._dialogRef.close();
  }
}
