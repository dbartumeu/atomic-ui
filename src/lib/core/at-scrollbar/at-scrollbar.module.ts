import {ModuleWithProviders, NgModule} from '@angular/core';
import {AtScrollbarComponent} from './at-scrollbar.component';
import {AtScrollbarsConfig, AtScrollbarService, IAtScrollbarsConfig} from './at-scrollbar.service';
import {AtCommonModule} from '../at-common/at-common.module';
export {AtScrollbarsConfig, AtScrollbarService}

@NgModule({
    imports: [
        AtCommonModule
    ],
    declarations: [
        AtScrollbarComponent
    ],
    exports: [
        AtScrollbarComponent
    ],
    providers: [],
})
export class AtScrollbarModule {
    static forRoot(config?: IAtScrollbarsConfig): ModuleWithProviders {
        return {
            ngModule: AtScrollbarModule,
            providers: [AtScrollbarService, {provide: 'config', useValue: config}],
        };
    }
}
