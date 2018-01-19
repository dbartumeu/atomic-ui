import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtScrollbarComponent} from './scrollbar.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';


@NgModule({
    imports: [
        CommonModule,
        ScrollDispatchModule
    ],
    declarations: [
        AtScrollbarComponent
    ],
    exports: [
        AtScrollbarComponent
    ],
    providers: [],
})
export class AtScrollbarModule {
}
