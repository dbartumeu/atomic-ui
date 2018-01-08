import { NgModule } from '@angular/core';
import { AtScrollbarModule, AtLayoutModule } from '@atomic/core';
import { LayoutBasicComponent } from './layout-basic/layout-basic.component';
import { LayoutCardOverComponent } from './layout-card-over/layout-card-over.component';

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
};

export const EXAMPLE_LIST: any[] = [
    LayoutBasicComponent,
    LayoutCardOverComponent,
];

@NgModule({
    declarations: [
        EXAMPLE_LIST,
    ],
    entryComponents: [EXAMPLE_LIST],
    imports: [
        AtScrollbarModule,
        AtLayoutModule,
    ],
    exports: [],
})

export class ExampleModule {

}
