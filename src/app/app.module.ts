import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtScrollbarModule } from '@atomic/core';
import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './pages/feature/feature.module';
import { CoreModule } from './core/core.module';
import { DocumentationModule } from './pages/documentation/documentation.module';
import { ExampleModule } from './examples/example.module';
import { HljsService } from './shared/hljs/hljs.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RoutingModule,
        AtScrollbarModule,
        CoreModule,
        FeatureModule,
        DocumentationModule,
        ExampleModule,
    ],
    exports: [],
    providers: [
        HljsService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
