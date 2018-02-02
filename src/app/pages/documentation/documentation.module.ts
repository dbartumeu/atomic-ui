import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
} from '@angular/material';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentHighlightModule} from '@covalent/highlight';
import {AtScrollbarModule, AtLayoutModule, AtEvents} from 'atomic-ui';
import {DOCUMENTATION_COMPONENTS, DocumentationRoutingModule} from './documentation-routing.module';
import {ExampleViewerComponent} from '../../shared/example-viewer/example-viewer.component';
import {PortalModule} from '@angular/cdk/portal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidenavModule} from './sidenav/sidenav.module';


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
        SidenavModule,
        CovalentMarkdownModule,
        CovalentHighlightModule,
        DocumentationRoutingModule,
        PortalModule
    ],
    declarations: [
        DOCUMENTATION_COMPONENTS,
        ExampleViewerComponent
    ],
    exports: [
        DOCUMENTATION_COMPONENTS,
    ],
    providers: [
        AtEvents
    ],
})
export class DocumentationModule {
}