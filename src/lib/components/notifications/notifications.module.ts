import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AtNotificationCountComponent, AtNotificationCountPositionX, AtNotificationCountPositionY } from './notification-count.component';

const TD_NOTIFICATIONS: Type<any>[] = [
  AtNotificationCountComponent,
];

export { AtNotificationCountComponent, AtNotificationCountPositionX, AtNotificationCountPositionY } from './notification-count.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TD_NOTIFICATIONS,
  ],
  exports: [
    TD_NOTIFICATIONS,
  ],
})
export class AtNotificationsModule {

}
