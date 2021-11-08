import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.css']
})
export class MoviesListItemComponent implements OnInit {

  @Input() allMovies: IMovie[] = [];
  @Output() addedToFavorites: EventEmitter<IMovie>

  constructor() {
    this.addedToFavorites = new EventEmitter()
  }
  ngOnInit(): void {

  }

  public addToFavorites(favoriteMovie: IMovie | undefined): void{
    this.addedToFavorites.emit(favoriteMovie)
  }
  
}
