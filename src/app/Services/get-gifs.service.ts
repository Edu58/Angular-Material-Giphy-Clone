import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGifsService {

  trendingUrl: string = `https://api.giphy.com/v1/gifs/trending?api_key=${ environment.apiKey }&limit=25`
  
  searchUrl: string = `https://api.giphy.com/v1/gifs/search?api_key=${ environment.apiKey }&limit=30&q=`

  constructor ( private http: HttpClient ) { }
  
  getTrendingGifs (): Observable<Object> {
    return this.http.get(this.trendingUrl)
  }

  searchGif (word: string): Observable<Object> {
    return this.http.get(this.searchUrl+ word)
  }
}
