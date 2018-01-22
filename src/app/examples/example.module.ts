import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { AtScrollbarModule, AtLayoutModule } from 'ngx-atomic/core';
import { AtDialogsModule } from "ngx-atomic/components";
import { AtChipsModule, AtSearchModule } from 'ngx-atomic/forms';

import { LayoutBasicComponent } from './layout-basic/layout-basic.component';
import { LayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { ChipsComponent } from './chips/chips.component';
import { SearchComponent } from './search/search.component';
import { DialogsComponent } from "./dialogs/dialogs.component";
import { FlexLayoutModule } from "@angular/flex-layout";

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
    'dialogs': {
        title: 'Atomic Dialogs',
        component: DialogsComponent,
        additionalFiles: null,
        selectorName: 'dialogs',
    },
};

export const EXAMPLE_LIST: any[] = [
    LayoutBasicComponent,
    LayoutCardOverComponent,
    ScrollbarComponent,
    ChipsComponent,
    SearchComponent,
    DialogsComponent,
];

@NgModule({
    declarations: [
        EXAMPLE_LIST,
    ],
    entryComponents: [EXAMPLE_LIST],
    imports: [
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        AtScrollbarModule,
        AtLayoutModule,
        AtChipsModule,
        AtSearchModule,
        AtDialogsModule,

    ],
    exports: [],
})

export class ExampleModule {

}
