import { Component, Input, HostBinding, ChangeDetectionStrategy,
         ViewChild, ElementRef, AfterContentInit } from '@angular/core';

export enum AtNotificationCountPositionY {
  Top = <any>'top',
  Bottom = <any>'bottom',
  Center = <any>'center',
}

export enum AtNotificationCountPositionX {
  Before = <any>'before',
  After = <any>'after',
  Center = <any>'center',
}

@Component({
  selector: 'at-notification-count',
  styleUrls: ['./notification-count.component.scss' ],
  templateUrl: './notification-count.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtNotificationCountComponent implements AfterContentInit {

  private _notifications: number | boolean = 0;
  private _positionY: AtNotificationCountPositionY;
  private _positionX: AtNotificationCountPositionX;

  /**
   * Div content wrapper of `ng-content`.
   */
  @ViewChild('content') content: ElementRef;

  /**
   * color?: "primary" | "accent" | "warn"
   * Sets the theme color of the notification tip. Defaults to "warn"
   */
  @Input() color: 'primary' | 'accent' | 'warn' = 'warn';

  /**
   * positionX?: AtNotificationCountPositionX or "before" | "after" | "center"
   * Sets the X position of the notification tip.
   * Defaults to "after" if it has content, else 'center'.
   */
  @Input()
  set positionX(positionX: AtNotificationCountPositionX) {
    this._positionX = positionX;
  }
  get positionX(): AtNotificationCountPositionX {
    return this._positionX;
  }

  /**
   * positionY?: AtNotificationCountPositionY or "top" | "bottom" | "center"
   * Sets the Y position of the notification tip.
   * Defaults to "top" if it has content, else 'center'.
   */
  @Input()
  set positionY(positionY: AtNotificationCountPositionY) {
    this._positionY = positionY;
  }
  get positionY(): AtNotificationCountPositionY {
    return this._positionY;
  }

  /**
   * notifications?: number | boolean
   * Number for the notification count. Shows component only if the input is a positive number or 'true'
   */
  @Input()
  set notifications(notifications: number | boolean) {
    this._notifications = notifications;
  }

  @HostBinding('class.at-notification-hidden')
  get hideHost(): boolean {
    return !this.show && !this._hasContent();
  }

  /**
   * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
   * Makes the notification tip show without a count.
   */
  get noCount(): string | boolean {
    return this._notifications === true;
  }

  /**
   * Notification display string when a count is available.
   * Anything over 99 gets set as 99+
   */
  get notificationsDisplay(): string {
    if (this._notifications > 99) {
      return '99+';
    }
    return this._notifications.toString();
  }

  /**
   * Shows notification tip only when [notifications] is true or a positive integer.
   */
  get show(): boolean {
    return this._notifications === true || (!isNaN(<any>this._notifications) && this._notifications > 0);
  }

  /**
   * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
   */
  ngAfterContentInit(): void {
    if (!this._positionX) {
      this.positionX = this._hasContent() ? AtNotificationCountPositionX.After : AtNotificationCountPositionX.Center;
    }
    if (!this._positionY) {
      this.positionY = this._hasContent() ? AtNotificationCountPositionY.Top : AtNotificationCountPositionY.Center;
    }
  }

  /**
   * Method to check if element has any kind of content (elements or text)
   */
  private _hasContent(): boolean {
    if (this.content) {
      let contentElement: HTMLElement = this.content.nativeElement;
      return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
    }
    return false;
  }

}
