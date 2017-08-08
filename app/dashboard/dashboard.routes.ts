import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FilmComponent } from './film/film.component';
import { ActorsComponent } from './film/actors/actors.component';
import { RatingComponent } from './film/rating/rating.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'home', component: HomeComponent },
    { path: 'userfilms', component: UserComponent, data: { title: 'best films' }},
    { path: 'film/:id', component: FilmComponent, data: { title: 'Heroes List' } },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    FilmComponent,
    ActorsComponent,
    RatingComponent,
]
