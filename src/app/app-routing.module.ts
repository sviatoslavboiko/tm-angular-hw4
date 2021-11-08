import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [
  { path: 'home', component: HomeListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'movies-list', component: MoviesListComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
