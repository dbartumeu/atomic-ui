import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AtSearchInputComponent } from './search-input/search-input.component';
import { AtSearchBoxComponent } from './search-box/search-box.component';

export { AtSearchBoxComponent } from './search-box/search-box.component';
export { AtSearchInputComponent } from './search-input/search-input.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    AtSearchInputComponent,
    AtSearchBoxComponent,
  ],
  exports: [
    AtSearchInputComponent,
    AtSearchBoxComponent,
  ],
})
export class AtSearchModule {

}
