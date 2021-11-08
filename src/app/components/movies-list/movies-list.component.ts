import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Output() sendFavoritesMovies: EventEmitter<IMovie>

  public movies: any;

  public favoritesMovies: IMovie[] = [];
  public addedToFavorites = false

  constructor(private movieService: MovieService) { 
    this.sendFavoritesMovies = new EventEmitter()
  }

  ngOnInit(): void {
    this.movieService.getPopularMovies()
      .subscribe((movies: IMovie[]) => {
        this.movies = movies
        this.movies = this.movies.results
    })
  }

  public sendFavorites(sendedfavoritesMovies: IMovie): void{
    this.sendFavoritesMovies.emit(sendedfavoritesMovies)
  }

  public addToFavoritesChild($event: IMovie){
    $event.favorite = !$event.favorite;
    this.favoritesMovies.push($event)
  }

}
