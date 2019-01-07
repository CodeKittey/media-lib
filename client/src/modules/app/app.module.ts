import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { RootComponent } from './components/root/root.component';
import { APP_COMPONENTS } from './components';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { APP_SERIVES } from './services';

@NgModule({
    declarations: [...APP_COMPONENTS],
    imports: [BrowserModule, RouterModule.forRoot(ROUTES), UiModule],
    providers: APP_SERIVES,
    bootstrap: [RootComponent]
})
export class AppModule {}
