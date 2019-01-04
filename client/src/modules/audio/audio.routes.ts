import { Routes } from '@angular/router';
import { AudioListComponent } from './components/audio-list/audio-list.component';
import { AudioDetailComponent } from './components/audio-detail/audio-detail.component';

export const AUDIO_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: AudioListComponent,
  },
  {
    path: 'list/:id',
    component: AudioDetailComponent,
  },
];
