import { NgModule, ModuleWithProviders } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { AUDIO_COMPONENTS } from './components';
import { RouterModule } from '@angular/router';
import { AUDIO_ROUTES } from './audio.routes';
import { AUDIO_SERIVES } from './services';

@NgModule({
  declarations: [...AUDIO_COMPONENTS],
  imports: [RouterModule.forChild(AUDIO_ROUTES)],
})
export class AudioModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AudioModule,
      providers: AUDIO_SERIVES,
    };
  }
}
