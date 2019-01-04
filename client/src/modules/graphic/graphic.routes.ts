import { Routes } from '@angular/router';
import { GraphicListComponent } from './components/graphic-list/graphic-list.component';

export const GRAPHIC_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: GraphicListComponent,
  },
];
