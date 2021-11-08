import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieService } from './services/movie.service';
import { MoviesListItemComponent } from './components/movies-list/movies-list-item/movies-list-item.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeListItemComponent } from './components/home-list/home-list-item/home-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MoviesListComponent,
    MoviesListItemComponent,
    HomeListComponent,
    HomeListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
