import { Component, Directive, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Directive({selector: 'at-dialog-title'})
export class AtDialogTitleDirective {}

@Directive({selector: 'at-dialog-content'})
export class AtDialogContentDirective {}

@Directive({selector: 'at-dialog-actions'})
export class AtDialogActionsDirective {}

@Component({
  selector: 'at-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss' ],
})
export class AtDialogComponent implements AfterContentInit {

  @ContentChildren(AtDialogTitleDirective) dialogTitle: QueryList<AtDialogTitleDirective>;
  @ContentChildren(AtDialogContentDirective) dialogContent: QueryList<AtDialogContentDirective>;
  @ContentChildren(AtDialogActionsDirective) dialogActions: QueryList<AtDialogActionsDirective>;

  ngAfterContentInit(): void {
    if (this.dialogTitle.length > 1) {
      throw new Error('Duplicate at-dialog-title component at in at-dialog.');
    }
    if (this.dialogContent.length > 1) {
      throw new Error('Duplicate at-dialog-content component at in at-dialog.');
    }
    if (this.dialogActions.length > 1) {
      throw new Error('Duplicate at-dialog-actions component at in at-dialog.');
    }
  }

}
