import { NgModule, ModuleWithProviders } from '@angular/core';
import { SHARED_SERVICES } from './services';

@NgModule({
    declarations: [],
    imports: [],
    bootstrap: []
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...SHARED_SERVICES]
        };
    }
}
