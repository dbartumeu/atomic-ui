import {NgModule} from '@angular/core';
import {AtScrollbarModule, AtLayoutModule} from "@atomic/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule
} from "@angular/material";
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentHighlightModule} from '@covalent/highlight';
import {FRAMEWORK_COMPONENTS, LayoutRoutingModule} from "./framework-routing.module";
import {ExampleViewerComponent} from '../../shared/example-viewer/example-viewer.component';
import {PortalModule} from '@angular/cdk/portal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FlexLayoutModule,
        AtLayoutModule,
        AtScrollbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatInputModule,
        CovalentMarkdownModule,
        CovalentHighlightModule,
        LayoutRoutingModule,
        PortalModule
    ],
    declarations: [
        FRAMEWORK_COMPONENTS,
        ExampleViewerComponent
    ],
    exports: [
        FRAMEWORK_COMPONENTS,
    ],
    providers: [],
})
export class FrameworkModule {
}