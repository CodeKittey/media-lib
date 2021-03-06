import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'graphic',
        loadChildren: '../graphic/graphic.module#GraphicModule',
    },
    {
        path: 'audio',
        loadChildren: '../audio/audio.module#AudioModule',
    },
    { path: '**', component: PageNotFoundComponent },
];
