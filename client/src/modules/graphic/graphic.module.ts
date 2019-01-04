import { NgModule, ModuleWithProviders } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { GRAPHIC_COMPONENTS } from './components';
import { RouterModule } from '@angular/router';
import { GRAPHIC_ROUTES } from './graphic.routes';
import { GRAPHIC_SERIVES } from './services';
import { GraphicListComponent } from './components/graphic-list/graphic-list.component';

@NgModule({
  declarations: [...GRAPHIC_COMPONENTS, GraphicListComponent],
  imports: [RouterModule.forChild(GRAPHIC_ROUTES)],
  providers: GRAPHIC_SERIVES,
})
export class GraphicModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: GraphicModule,
      providers: GRAPHIC_SERIVES,
    };
  }
}
