import { NgModule, ModuleWithProviders } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

import { AtChipsComponent, AtChipDirective, AtAutocompleteOptionDirective } from './chips.component';
export { AtChipsComponent, AtChipDirective, AtAutocompleteOptionDirective } from './chips.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  declarations: [
    AtChipsComponent,
    AtChipDirective,
    AtAutocompleteOptionDirective,
  ],
  exports: [
    AtChipsComponent,
    AtChipDirective,
    AtAutocompleteOptionDirective,
  ],
})
export class AtChipsModule {

}
