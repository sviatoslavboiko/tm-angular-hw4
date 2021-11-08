import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from '../models/movie.interface';
import { Observable } from 'rxjs';

const url='https://swapi.dev/api/people';

@Injectable()
export class MovieService {
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${environment.API_KEY}`
        })
    }

    constructor(private httpClient: HttpClient) {}
    
    public getMovie(movieId: number): Observable<IMovie> {
      return this.httpClient.get<IMovie>(`${environment.BASE_URL}/movie/${movieId}/`, this.httpOptions)
    }

    public getPopularMovies(): Observable<IMovie[]> {
        return this.httpClient.get<IMovie[]>(`${environment.BASE_URL}/movie/popular`, this.httpOptions)
    }
}