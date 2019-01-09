import { NgModule, ModuleWithProviders } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { SHARED_SERVICES } from './services';

@NgModule({
    declarations: [],
    imports: [UiModule],
    exports: [UiModule],
    bootstrap: [],
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...SHARED_SERVICES],
        };
    }
}
