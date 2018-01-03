import {NgModule} from '@angular/core';
import {AtScrollbarModule, AtLayoutModule} from "@atomic/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material";
import {FRAMEWORK_COMPONENTS, LayoutRoutingModule} from "./framework-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        AtLayoutModule,
        AtScrollbarModule,
        MatListModule,
        LayoutRoutingModule
    ],
    declarations: [
        FRAMEWORK_COMPONENTS,
    ],
    exports: [
        FRAMEWORK_COMPONENTS,
    ],
    providers: [],
})
export class FrameworkModule {
}