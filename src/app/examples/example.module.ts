import {NgModule} from '@angular/core';
import {LayoutBasicComponent} from './layout-basic/layout-basic.component';
import {AtScrollbarModule, AtLayoutModule} from "@atomic/core";

export interface LiveExample {
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}

export const EXAMPLE_COMPONENTS = {
    'layout-basic': {
        title: 'Basic Layout',
        component: LayoutBasicComponent,
        additionalFiles: null,
        selectorName: 'layout-basic'
    },
};

export const EXAMPLE_LIST = [
    LayoutBasicComponent
];

@NgModule({
    declarations: [
        EXAMPLE_LIST
    ],
    entryComponents: [EXAMPLE_LIST],
    imports: [
        AtScrollbarModule,
        AtLayoutModule
    ],
    exports: [],
})

export class ExampleModule {

}
