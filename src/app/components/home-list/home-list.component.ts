import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  public favoritesMovies: IMovie[] = [{id: '1', vote_average: 1, title: '1', release_date: '1', favorite: true},
  {id: '2', vote_average: 2, title: '2', release_date: '2', favorite: true},
  {id: '3', vote_average: 3, title: '3', release_date: '3', favorite: true},
  {id: '4', vote_average: 4, title: '4', release_date: '4', favorite: true},
  {id: '5', vote_average: 5, title: '5', release_date: '5', favorite: true}
  ];
  public addedToFavorites = false

  constructor() { }

  ngOnInit(): void {

  }

  public removedFromFavoritesChild($event: IMovie){
    $event.favorite = !$event.favorite;
    this.favoritesMovies.pop()
    console.log(this.favoritesMovies);
  }

}
