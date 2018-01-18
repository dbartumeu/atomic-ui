import {NgModule} from '@angular/core';
import {AtScrollbarModule, AtLayoutModule} from '@atomic/core';
import {AtChipsModule} from '@atomic/forms';
import {LayoutBasicComponent} from './layout-basic/layout-basic.component';
import {LayoutCardOverComponent} from './layout-card-over/layout-card-over.component';
import {ScrollbarComponent} from './scrollbar/scrollbar.component';
import {MatCardModule} from '@angular/material';


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
};

export const EXAMPLE_LIST: any[] = [
    LayoutBasicComponent,
    LayoutCardOverComponent,
    ScrollbarComponent
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
        MatCardModule,
    ],
    exports: [],
})

export class ExampleModule {

}
