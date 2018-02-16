import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

import {
    AtCommonModule,
    AtScrollbarModule,
    AtLayoutModule,
    AtDialogsModule,
    AtLoadingModule,
    AtNotificationsModule,
    AtIconModule,
    AtChipsModule,
    AtSearchModule,
    AtFormFieldBoxModule
} from 'atomic-ui';

import {LayoutBasicComponent} from './layout-basic/layout-basic.component';
import {LayoutCardOverComponent} from './layout-card-over/layout-card-over.component';
import {ScrollbarComponent} from './scrollbar/scrollbar.component';
import {ChipsComponent} from './chips/chips.component';
import {SearchComponent} from './search/search.component';
import {DialogsComponent} from "./dialogs/dialogs.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {LoadingCircularComponent} from './loading-circular/loading-circular.component';
import {LoadingLinearComponent} from './loading-linear/loading-linear.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {IconsComponent} from './icons/icons.component';

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
    'loading-circular': {
        title: 'Atomic Circular Loading',
        component: LoadingCircularComponent,
        additionalFiles: null,
        selectorName: 'loading-circular',
    },
    'loading-linear': {
        title: 'Atomic Linear Loading',
        component: LoadingLinearComponent,
        additionalFiles: null,
        selectorName: 'loading-linear',
    },
    'notifications': {
        title: 'Atomic Notifications',
        component: NotificationsComponent,
        additionalFiles: null,
        selectorName: 'notifications',
    },
    'form-field': {
        title: 'Atomic Form Field Box',
        component: FormFieldComponent,
        additionalFiles: null,
        selectorName: 'form-field',
    },
    'icons': {
        title: 'Atomic Icons',
        component: IconsComponent,
        additionalFiles: null,
        selectorName: 'icons',
    },
};

export const EXAMPLE_LIST: any[] = [
    LayoutBasicComponent,
    LayoutCardOverComponent,
    ScrollbarComponent,
    ChipsComponent,
    SearchComponent,
    DialogsComponent,
    LoadingCircularComponent,
    LoadingLinearComponent,
    NotificationsComponent,
    FormFieldComponent,
    IconsComponent
];

@NgModule({
    declarations: [
        EXAMPLE_LIST,
    ],
    entryComponents: [EXAMPLE_LIST],
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        AtCommonModule,
        AtScrollbarModule,
        AtLayoutModule,
        AtChipsModule,
        AtSearchModule,
        AtDialogsModule,
        AtLoadingModule,
        AtNotificationsModule,
        AtFormFieldBoxModule,
        AtIconModule
    ],
    exports: [],
})

export class ExampleModule {

}
