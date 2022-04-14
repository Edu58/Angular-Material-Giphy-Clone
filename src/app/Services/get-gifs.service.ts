import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGifsService {

  baseUrl: string = `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=25`

  constructor ( private http: HttpClient ) { }
  
  getTrendingGifs (): Observable<Object> {
    return this.http.get(this.baseUrl)
  }
}
