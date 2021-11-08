import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.css']
})
export class HomeListItemComponent implements OnInit {

  @Input() favoritesMovies: IMovie[] = [];
  @Output() removedFromFavorites: EventEmitter<IMovie>

  constructor() { 
    this.removedFromFavorites = new EventEmitter()
  }

  ngOnInit(): void {
  }

  public removeFromFavorites(favoriteMovie: IMovie | undefined): void{
    this.removedFromFavorites.emit(favoriteMovie)
  }
  
}
