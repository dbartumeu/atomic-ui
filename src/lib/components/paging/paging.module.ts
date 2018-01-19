import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AtPagingBarComponent } from './paging-bar.component';

export { AtPagingBarComponent, IPageChangeEvent } from './paging-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    AtPagingBarComponent,
  ],
  exports: [
    AtPagingBarComponent,
  ],
})
export class AtPagingModule {

}
