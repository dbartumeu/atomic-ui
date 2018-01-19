import {NgModule} from '@angular/core';
import {AtScrollbarModule, AtLayoutModule} from 'ngx-atomic/core';
import {LayoutBasicComponent} from './layout-basic/layout-basic.component';
import {LayoutCardOverComponent} from './layout-card-over/layout-card-over.component';
import {ScrollbarComponent} from './scrollbar/scrollbar.component';
import {MatCardModule} from '@angular/material';
import {ChipsComponent} from './chips/chips.component';
import {AtChipsModule} from '../../lib/forms';
import {AtSearchModule} from '../../lib/forms/search/search.module';
import {SearchComponent} from './search/search.component';


export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}

export const EXAMPLE_COMPONENTS: any = {
    'layout-basic': {
        title: 'Basic Layout',
        component: LayoutBasicComponent,
        additionalFiles: null,
        selectorName: 'layout-basic',
    },
    'layout-card-over': {
        title: 'Card Over Layout',
        component: LayoutCardOverComponent,
        additionalFiles: null,
        selectorName: 'layout-card-over',
    },
    'scrollbar': {
        title: 'Atomic Scrollbar',
        component: ScrollbarComponent,
        additionalFiles: null,
        selectorName: 'scrollbar',
    },
    'chips': {
        title: 'Atomic Chips',
        component: ChipsComponent,
        additionalFiles: null,
        selectorName: 'chips',
    },
    'search': {
        title: 'Atomic Search',
        component: SearchComponent,
        additionalFiles: null,
        selectorName: 'search',
    },
};

export const EXAMPLE_LIST: any[] = [
    LayoutBasicComponent,
    LayoutCardOverComponent,
    ScrollbarComponent,
    ChipsComponent,
    SearchComponent
];

@NgModule({
    declarations: [
        EXAMPLE_LIST,
    ],
    entryComponents: [EXAMPLE_LIST],
    imports: [
        AtScrollbarModule,
        AtLayoutModule,
        AtChipsModule,
        AtSearchModule,
        MatCardModule,
    ],
    exports: [],
})

export class ExampleModule {

}
